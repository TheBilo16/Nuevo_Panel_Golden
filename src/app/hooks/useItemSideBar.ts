import { createRef, useState, useEffect } from "react";
import { Iprops } from "../components/layers/SideBar/interfaces";

function useItemSideBar(props : Iprops){
    const refItemHide = createRef<HTMLUListElement>();

    //hooks
    const [classItem,setClassItem] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(true);
    const [multiple,setMultiple] = useState<boolean>(false);

    //functions
    const activateItemHide = () : void => {
        let element = refItemHide.current;
        if(element?.classList.contains("hide")) 
            element?.classList.remove("hide");
        else 
            element?.classList.add("hide");            
    }

    const { type } = props.list;

    useEffect(() => {
        if(type == "normal") setMultiple(false);
        else if(type == "multiple") setMultiple(true);
        
        setClassItem(type + "-list");
        setLoading(false);
    }, []);

    return {
        refItemHide,
        classItem,
        loading,
        multiple,
        activateItemHide
    }
}

export default useItemSideBar;
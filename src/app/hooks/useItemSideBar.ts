import { createRef, useState, useEffect } from "react";
import { Iprops } from "../components/layers/SideBar/interfaces";

function useItemSideBar(props : Iprops){
    //hooks
    const [classItem,setClassItem] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(true);
    const [multiple,setMultiple] = useState<boolean>(false);

    const { type } = props.list;

    useEffect(() => {
        if(type == "normal") setMultiple(false);
        else if(type == "multiple") setMultiple(true);
        
        setClassItem(type + "-list");
        setLoading(false);
    }, []);

    return {
        classItem,
        loading,
        multiple
    }
}

export default useItemSideBar;
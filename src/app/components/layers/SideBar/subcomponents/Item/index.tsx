import React, { createRef, useEffect, useState, Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./index.scss";

//Interfaces
import { Iprops } from "../../interfaces";

function Item(props : Iprops) : JSX.Element {
    //ref
    const itemHide = createRef<HTMLUListElement>();

    //hooks
    const [classItem,setClassItem] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(true);
    const [multiple,setMultiple] = useState<boolean>(false);

    //destructuring
    const { list } = props;
    const { type , icon , title, subitems } = list;

    //functions
    const activateItemHide = () : void => {
        let element = itemHide.current;
        if(element?.classList.contains("hide")) 
            element?.classList.remove("hide");
        else 
            element?.classList.add("hide");            
    }

    //ComponentDidMount
    useEffect(() => {
        if(type == "normal") setMultiple(false);
        else if(type == "multiple") setMultiple(true);
        
        setClassItem(type + "-list");
        setLoading(false);
    }, []);

    if(loading) return <Fragment></Fragment>

    return <li className={`item-list ${classItem}`}>
        <div className="item" onClick={activateItemHide}>
            <div className="item-container">
                <span className="item-icon">{icon}</span>
                <span className="item-text">{title}</span>                
            </div>
            { multiple ? 
                <span className="item-action"><FaChevronDown /></span> 
                : null 
            }                  
        </div>

        { multiple ? 
            <ul className="sub-item hide" ref={itemHide}>
                {
                    subitems?.map((v,i) => 
                        <li className="sub-item-list" key={i}>
                            <span className="sub-item-icon">{v.icon}</span>
                            <span className="sub-item-text">{v.title}</span>
                        </li>
                    )
                }
            </ul> 
          : null 
        }
    </li>
}

export default Item;
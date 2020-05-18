import React, { Fragment, FunctionComponent } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./index.scss";

//Components
import { Iprops } from "../../interfaces";
import useItemSideBar from "../../../../../hooks/useItemSideBar";

const Item : FunctionComponent<Iprops> = props => {
    const { multiple, loading, classItem, activateItemHide, refItemHide } = useItemSideBar(props);
    const { icon , title, subitems } = props.list;

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
            <ul className="sub-item hide" ref={refItemHide}>
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
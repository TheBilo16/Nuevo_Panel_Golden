import React, { Fragment, FunctionComponent, useEffect, Children } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import "./index.scss";

//Component
import ItemHide from "../ItemHide";

//Extra
import { Iprops } from "../../interfaces";
import useItemSideBar from "../../../../../hooks/useItemSideBar";
import useActivateItem from "../../../../../hooks/useActivateItem";

const Item : FunctionComponent<Iprops> = props => {
    //Hooks
    const history = useHistory();
    const { onPress , refElementHide } = useActivateItem("hide");
    const { multiple, loading, classItem } = useItemSideBar(props);
    
    //Const
    const { icon , title, subitems , link } = props.list;
    const onPressLink = () => {
        if(multiple) onPress();
        else {
            history.push(link ? link : "/");
        }
    }

    if(loading) return <Fragment></Fragment>

    return <li className={`item-list ${classItem}`}>
        <div className="item" onClick={onPressLink}>
            <div className="item-container">
                <span className="item-icon">{icon}</span>
                <span className="item-text">{title}</span>                
            </div>
            { 
                multiple ? 
                    <span className="item-action"><FaChevronDown /></span> 
                : null 
            }                  
        </div>
        { 
            multiple ? 
                <ItemHide reference={refElementHide} items={subitems ? subitems : []} /> 
            : null
        }
    </li>
}

export default Item;
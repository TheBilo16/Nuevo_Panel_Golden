import React , { useState, createRef } from "react";
import { FaPortrait } from "react-icons/fa";
import "./index.scss";

//Extra
import useActivateItem from "../../../hooks/useActivateItem";

function NavBar() : JSX.Element{
    const { onPress, refElementHide } = useActivateItem<HTMLUListElement>("hide");

    return <div className="navbar">
        <section className="navbar-options"></section>
        <section className="user-options">
            <div className="image-admin">
                <div className="image" onClick={onPress}>
                    {/* <img src="" alt=""/> */}
                </div>
                <ul ref={refElementHide} className="list-image-option hide">
                    <li className="image-option">
                        <span><FaPortrait /></span>
                        <span>Option</span>
                    </li>
                    <li className="image-option">
                        <span><FaPortrait /></span>
                        <span>Option</span>
                    </li>
                    <li className="image-option">
                        <span><FaPortrait /></span>
                        <span>Option</span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
}

export default NavBar;
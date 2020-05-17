import React from "react";
import "./index.scss";

import SideBar from "../SideBar";
import NavBar from "../NavBar";

function TemplateBars() : JSX.Element{
    return <div className="default-screen">
        <SideBar />
        <NavBar />
    </div>
}

export default TemplateBars;
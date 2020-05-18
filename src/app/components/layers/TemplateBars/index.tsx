import React, { FunctionComponent } from "react";
import "./index.scss";

//Components
import SideBar from "../SideBar";
import NavBar from "../NavBar";

const TemplateBars : FunctionComponent = props => {
    const { children } = props;

    return <div className="default-screen">
        <SideBar />
        <div className="container-page">
            <NavBar />
            <div className="page">
                { children }
            </div>
        </div>
    </div>
}

export default TemplateBars;
import React, { useContext, Fragment } from "react";
import { AccountContext } from "../context/accountContext";
import Router from "./router/index";

function App() : JSX.Element{
    const { isLoadingInformation } = useContext(AccountContext);

    if(isLoadingInformation) 
        return <Fragment></Fragment>
    else
        return <Router />
}

export default App;
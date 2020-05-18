import React , { FunctionComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Screens
import PageNotFound from "../../screens/PageNotFound";
import Home from "../../screens/Home";

const RoutesAuth : FunctionComponent = () => {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageNotFound} />
    </Switch>
}

export default RoutesAuth;
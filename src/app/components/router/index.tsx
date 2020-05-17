import React, { useContext, Fragment } from "react";
import { BrowserRouter , Route , Switch } from "react-router-dom";

//Screens
import PageNotFound from "../screens/PageNotFound";

//Extra
import TemplateBars from "../layers/TemplateBars";

function Router() : JSX.Element {
    
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={TemplateBars} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </BrowserRouter>
}

export default Router;
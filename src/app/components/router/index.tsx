import React, { useContext, Fragment } from "react";

//Components
import TemplateBars from "../layers/TemplateBars";
import RoutesAuth from "./subcomponents/RoutesAuth";
import RoutesNotAuth from "./subcomponents/RoutesNotAuth";

//Extra
import { AccountContext } from "../../context/accountContext";

function Router() : JSX.Element {
    const { userData } = useContext(AccountContext);

    if(!userData) return <RoutesNotAuth />

    return <TemplateBars>
        <RoutesAuth />
    </TemplateBars>
}

export default Router;
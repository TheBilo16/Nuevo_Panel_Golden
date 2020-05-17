import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";

import App from "./components/App";
import { AccountProvider } from "./context/accountContext";

ReactDOM.render(
    <AccountProvider>
        <App />
    </AccountProvider>,
    document.getElementById("root")
);
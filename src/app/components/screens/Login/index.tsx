import React, { FunctionComponent } from "react";
import useLogin from "../../../hooks/useLogin";

const Login : FunctionComponent = (props) : JSX.Element =>{
    const { LoginFormSubmit, changePassword, changeUsername } = useLogin();

    return <div>
        <form autoComplete="off" onSubmit={LoginFormSubmit} >
            <input type="text" onChange={changeUsername} placeholder="Username" required />
            <input type="password" onChange={changePassword} placeholder="Password" required />
            <input type="submit" />
        </form>
    </div>
}

export default Login;
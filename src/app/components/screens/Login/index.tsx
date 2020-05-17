import React from "react";
import useLogin from "../../../hooks/useLogin";

function Login() : JSX.Element{
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
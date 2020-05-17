import { useState, ChangeEvent, FormEvent } from "react";
import { saveTokenLocalStorage } from "../services/account";
import { Fetch } from "../services/class/Fetch";

function useLogin(){
    const [ username , setUsername ] = useState<string>("");
    const [ password , setPassword ] = useState<string>("");

    const changeUsername = (ev : ChangeEvent<HTMLInputElement>) : void => setUsername(ev.target.value);
    const changePassword = (ev : ChangeEvent<HTMLInputElement>) : void => setPassword(ev.target.value);

    const LoginFormSubmit = async (ev : FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        
        const F : Fetch = new Fetch();
        const response = await F.post("/api/admin/login","json",{ username, password });

        if(response.token){
            saveTokenLocalStorage(response.token);
            window.location.reload();
        }
    }

    return {
        changeUsername,
        changePassword,
        LoginFormSubmit
    }
}

export default useLogin;
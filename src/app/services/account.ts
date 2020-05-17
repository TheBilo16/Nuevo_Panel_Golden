import jwt from "jsonwebtoken";
import { KEY_TOKEN_SAVE, JWT_PASSWORD } from "../config";

function getTokenLocalStorage(){
    let tokenSave : any = localStorage.getItem(KEY_TOKEN_SAVE);

    // if(tokenSave){
    //     try{
    //         jwt.verify(tokenSave,JWT_PASSWORD);
    //     }catch(e){
    //         localStorage.removeItem(KEY_TOKEN_SAVE);
    //         tokenSave = null;
    //         // console.log(e.message);
    //     }
    // }

    return tokenSave;
}

function saveTokenLocalStorage(token : string){
    const tokenSave = getTokenLocalStorage();
    if(!tokenSave) 
        localStorage.setItem(KEY_TOKEN_SAVE,"TOKEN " + token);
}

function decodeTokenLocalStorage(token : string){
    const tokenDecode : any = jwt.decode(token,{ complete : true });
    return tokenDecode;
}

export {
    getTokenLocalStorage,
    saveTokenLocalStorage,
    decodeTokenLocalStorage
}
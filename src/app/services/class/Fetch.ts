import { TemplateFetch } from "./TemplateFetch";
import { getTokenLocalStorage } from "../account";

interface ConfigFetch {
    method : string,
    body? : string,
    headers : {}
}

class Fetch extends TemplateFetch{
    private requestData = async (url : string, type : string, config : ConfigFetch) => {
        let request, response;
        
        try{
            request = await fetch(url, config);
            switch(type){
                case "text":
                    response = await request.text();
                    break;
                case "json":
                    response = await request.json();
                    break;
                default : 
                    throw new Error("Type is not Exists");
            } 
        }catch(error){
            console.log(error);
        }

        if(response.message) console.log(response.message);

        return response;
    }

    public get = (url : string, type : string = "") : Promise<any> => {
        const token = getTokenLocalStorage();
        let headers : any = {};

        if(token) headers["Authorization"] = token;

        const config : ConfigFetch = {
            method : "get",
            headers
        }

        return this.requestData(url,type,config);      
    }

    public post = (url : string, type : string = "", data? : object) : Promise<any> => {
        const token = getTokenLocalStorage();
        let headers : any = {},
            body : string = "";

        if(token) headers["Authorization"] = token;
        if(data){
            body = JSON.stringify(data);
            headers["Content-type"] = "application/json";
        }  

        const config : ConfigFetch = {
            method : "post",
            body,
            headers
        }

        return this.requestData(url,type,config);
    }
}

export {
    Fetch
}
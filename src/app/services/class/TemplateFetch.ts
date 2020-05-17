abstract class TemplateFetch{
    abstract get(url : string, type? : string) : any;
    abstract post(url : string, type? : string) : any;
}

export {
    TemplateFetch
}
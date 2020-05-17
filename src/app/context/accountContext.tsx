import React , { createContext, Component } from "react";
import { getTokenLocalStorage } from "../services/account";

interface IProps {}
interface IState {
    userData? : object,
    isLoadingInformation? : boolean
}

const AccountContext = createContext<IState>({});

class AccountProvider extends Component<IProps,IState>{
    constructor(props : IProps){
        super(props);
        this.state = {
            userData : {},
            isLoadingInformation : true
        }
    }

    componentWillMount(){
        const token = getTokenLocalStorage();

        if(token) this.setState({ userData : { token } });
        
        this.setState({ isLoadingInformation : false });
    }

    render(){
        const { state , props } = this;
        const { children } = props;

        return <AccountContext.Provider value={{...state}}>
            {children}
        </AccountContext.Provider>
    }
}

export {
    AccountContext,
    AccountProvider
}
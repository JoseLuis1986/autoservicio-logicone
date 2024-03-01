import { createContext, useReducer } from "react";
import { configReducer } from "./configReducer";



export const ConfigurationContext = createContext();

const initialState = {
    isAdmin: false,
}

export const ConfigProvider = ({ children }) => {

    const [configState, dispatchConfig] = useReducer( configReducer, initialState );
    
    return(
        <ConfigurationContext.Provider value={{
            configState,
            dispatchConfig
        }}>
            {children}
        </ConfigurationContext.Provider>
    )
}
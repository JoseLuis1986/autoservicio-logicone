import { createContext, useReducer } from "react";
import { alertReducer } from "./alertReducer";



export const AlertContext = createContext();

const initialState = {
    intent: null,
    messages: [],//el mensaje seleccion
}

export const AlertProvider = ({ children }) => {

    const [alertState, dispatch] = useReducer( alertReducer, initialState );
    
    return(
        <AlertContext.Provider value={{
            alertState,
            dispatch
        }}>
            {children}
        </AlertContext.Provider>
    )
}
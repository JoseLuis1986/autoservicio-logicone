import { useState, useCallback, useContext, createContext } from "react";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { AlertContext } from "../context/alerts/AlertContext";
import { types } from "../types/types";

export const AuthContext = createContext();


const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
    department: null
};

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);
    const { dispatch } = useContext(AlertContext);

    const login = async (email, password) => {

        const resp = await fetchWithoutToken('login', { email, password }, 'POST');

        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email,
                department: usuario.department
            })
            dispatch({ type: types.cleanMessage })
        } if (!resp.ok) {
            dispatch({
                type: types.newIntent,
                payload: {
                    intent: 'error',
                    messages: resp.msg ? resp.msg : (resp.error || resp.errors.email.msg)
                }
            });

            return;
        }
    };

    const register = async (data) => {
        const { tenant_id, client_id, client_secret, grant_type, resource } = data; 
        const resp = await fetchWithoutToken('login/new', { tenant_id, client_id, client_secret, grant_type, resource }, 'POST');

        if (resp.ok) {
            localStorage.setItem('token', resp.token);

            const { usuario } = resp;

            console.log(usuario);

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email,
                department: usuario.department
            })
            // console.log("Autenticado!!");

            return true;
        }

        return resp.msg;
    };


    const verifyToken = useCallback(async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
                department: null
            })

            return false;
        }
        const resp = await fetchWithToken('login/renew');
        if (resp.ok) {
            localStorage.setItem('token', resp.token);

            const { usuario } = resp;

            console.log(usuario);

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email,
                department: usuario.department
            })
            console.log("Autenticado!!");
            return true;
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
                department: null
            })

            return false;
        }

    }, []);


    const logout = () => {
        localStorage.removeItem('token');

        // dispatch({ type: types.closeSession });

        setAuth({
            checking: false,
            logged: false
        });

        dispatch({ type: types.cleanMessage })
    }



    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verifyToken,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
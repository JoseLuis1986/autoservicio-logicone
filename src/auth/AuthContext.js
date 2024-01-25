import { useState, useCallback, useContext, createContext } from "react";
import { fetchRegister, fetchWithToken } from "../helpers/fetch";
import { AlertContext } from "../context/alerts/AlertContext";
import { types } from "../types/types";

export const AuthContext = createContext();


const initialState = {
    uid: null,
    checking: true,
    logged: false,
    user: {},
    clave_access: null
};

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);
    const { dispatch } = useContext(AlertContext);

    /*
    token_type: 'Bearer',                                                                                                   
    expires_in: '3599',                                                                                                     
    ext_expires_in: '3599',                                                                                                 
    expires_on: '1703170228',                                                                                               
    not_before: '1703166328',                                                                                               
    resource: 'https://usnconeboxax1aos.cloud.onebox.dynamics.com',                                                         
    access_token: 
    */

   const register = async (data) => {
        const resp = await fetchRegister('login/new', data, 'POST'); //{ tenant_id, client_id, client_secret, grant_type, resource }
        if (resp.success) {
            const { access_token } = resp.token;
            //guardo el token
            localStorage.setItem('token', JSON.stringify(access_token));
            console.log("Autenticado!!");

            return { ok: true };
        }
        dispatch({
            type: types.newIntent,
            payload: {
                intent: 'error',
                messages: resp.msg
            }
        });
        return { ok: false }
    };

    const login = async (values) => {
        // renewToken();
        const resp = await fetchWithToken('login', values, 'POST');
        if (resp.success) {
            const { ClaveAccess, datosUser } = resp.usuario;
            setAuth({
                checking: false,
                // logged: true,
                user: datosUser,
                clave_access: ClaveAccess
            })
            return true;
        } if (!resp.success && resp.status === 401) {
            // console.log('respuesta', resp.error.message);
            dispatch({
                type: types.newIntent,
                payload: {
                    intent: 'error',
                    messages: resp.error.message
                }
            });

            return false;
        }
    };

    const accessKey = async (key) => {
        if (key === auth.clave_access) {
            localStorage.setItem('user', JSON.stringify(auth.user));
            setAuth({
                user: auth.user,
                checking: false,
                logged: true,
            })
            return true
        }
        return false
    };

    const requestAccess = async (values) => {
        const resp = await fetchWithToken('login/request-access', values, 'POST');
        if ( resp.success ) {
            return { ok: true, message: resp.message }
        } else {
           return { ok: false, message: resp.message }
        }
    }

    const verifyToken = useCallback(async () => {

        const token = localStorage.getItem('token');
        if (!token) {
            setAuth({
                checking: false,
                logged: false,
                user: {},
                clave_access: null
            })

            return false;
        }
        // const { access_token } = token;
        //si token no existe
        if (!token) {
            setAuth({
                checking: false,
                logged: false,
                user: {},
                clave_access: null
            })

            return false;
        }
        // const resp = await fetchWithToken('login');
        const resp = JSON.parse(localStorage.getItem('user'))
        if (!resp) {
            setAuth({
                checking: false,
                logged: false,
                user: {},
                clave_access: null
            })
            console.log("No Autenticado!!");
            return false;
        } else {
            setAuth({
                checking: false,
                logged: true,
                user: resp
            })

            return true;
        }

    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // dispatch({ type: types.closeSession });

        setAuth({
            uid: null,
            checking: false,
            hasToken: false,
            logged: false,
            clave_access: null
        });

        dispatch({ type: types.cleanMessage })
    }



    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            requestAccess,
            verifyToken,
            accessKey,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
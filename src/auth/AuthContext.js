import { useState, useCallback, useContext, createContext } from "react";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
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

console.log(initialState);

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);
    const { dispatch } = useContext(AlertContext);


    const register = async (data) => {
        // const { tenant_id, client_id, client_secret, grant_type, resource } = data; 
        const resp = await fetchWithoutToken('login/new', data, 'POST'); //{ tenant_id, client_id, client_secret, grant_type, resource }
        console.log(resp)
        if (resp.success) {
            //guardo el token
            localStorage.setItem('token', resp.token);
            // const { usuario } = resp;

            console.log(resp);

            console.log("Autenticado!!");

            return { ok: true };
        }
        // console.log(resp)
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
        const resp = await fetchWithToken('login', values, 'POST');
        if (resp.ok) {
            const { ClaveAccess, CodigoError, DescripcionError, datosUser } = resp.usuario;
            console.log('datos de usuario en el login', datosUser)
            setAuth({
                checking: false,
                // logged: true,
                user: datosUser,
                clave_access: ClaveAccess
            })
            return true;
        } if (!resp.ok) {
            dispatch({
                type: types.newIntent,
                payload: {
                    intent: 'error',
                    messages: resp.msg ? resp.msg : (resp.error || resp.msg)
                }
            });

            return false;
        }
    };

    const accessKey = async (key) => {
        console.log('key que llega', key)
        if (key === auth.clave_access) {
            console.log("es igual entro aqui")
            localStorage.setItem('user', JSON.stringify(auth.user));
            setAuth({
                user: auth.user,
                checking: false,
                logged: true,
            })
            return true
        }
        return false
    }

    const verifyToken = useCallback(async () => {

        const token = localStorage.getItem('token');
        console.log('el token', !token)
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
            verifyToken,
            accessKey,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
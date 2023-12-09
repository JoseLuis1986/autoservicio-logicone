import { useState, useCallback, useContext, createContext } from "react";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { AlertContext } from "../context/alerts/AlertContext";
import { types } from "../types/types";

export const AuthContext = createContext();


const initialState = {
    uid: null,
    checking: true,
    hasToken: false,
    logged: false
};

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);
    const { dispatch } = useContext(AlertContext);


    const register = async (data) => {
        // const { tenant_id, client_id, client_secret, grant_type, resource } = data; 
        const resp = await fetchWithoutToken('login/new', data, 'POST'); //{ tenant_id, client_id, client_secret, grant_type, resource }

        if (resp.ok) {
            //guardo el token
            localStorage.setItem('token', resp.token);
            // const { usuario } = resp;

            console.log(resp.token);

            setAuth({
                ...initialState,
                checking: false,
            })
            console.log("Autenticado!!");

            return { ok: true };
        }

        return resp.msg;
    };

    const login = async (values) => {
        const resp = await fetchWithToken('login', values, 'POST');

        console.log(resp);
        if (resp.ok) {
            const { usuario } = resp;
            const dataUser = JSON.parse(usuario);
            const { Received, CodigoError, DescripcionError } = dataUser;
            const datosUser = JSON.parse(Received);
            const dtt = {
                datosUser,
                CodigoError,
                DescripcionError,
            }
            localStorage.setItem('user', JSON.stringify(dtt.datosUser));

            setAuth({
                ...initialState,
                checking: false,
                logged: true
            })
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

    // const getDataPromise = (tk) => new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve({
    //             ok: true,
    //             token: tk,
    //             usuario: JSON.parse(localStorage.getItem('user'))
    //         });
    //     }, 2000);
    // });

    const verifyToken = useCallback(async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
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
                logged: true
            })
            console.log("Autenticado!!");
            return true;
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false
            })

            return false;
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
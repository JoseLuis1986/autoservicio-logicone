import { useEffect, useRef, useState, useContext } from 'react';
import { fetchWithToken } from '../helpers/fetch';
import { AuthContext } from '../auth/AuthContext';
import { AlertContext } from '../context/alerts/AlertContext';
import { types } from '../types/types';

const initialState = {
    data: null,
    loading: true,
    error: null
}

export const useFetch = (url) => {
    const { logout } = useContext(AuthContext);
    const { dispatch } = useContext(AlertContext);
    const [state, setState] = useState(initialState);
    const [controlAb, setControlAb] = useState(null)

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        const controller = new AbortController();
        setControlAb(controller);
        const signal = controller.signal;

        fetchWithToken(url, { signal })
            .then((resp) => {
                // if (isMounted.current) {
                if (resp.status === 401) {
                    dispatch({
                        type: types.newIntent,
                        payload: {
                            intent: 'error',
                            messages: 'Su sesion ha expirado. Cerrando en 5 segundos...'
                        }
                    })
                    setState({
                        loading: false,
                        error: null,
                        data: null
                    });
                    setTimeout(() => {
                        logout();
                    }, 5000);
                } else {
                    setState({
                        loading: false,
                        error: null,
                        data: resp.data
                    })
                }
                // }
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("Request Cancelled")
                } else {
                    setState({
                        data: null,
                        loading: false,
                        error: err
                    })
                }
            })
        return () => controller.abort()
    }, [url])

    const handleCancelRequest = () => {
        if (controlAb) {
            controlAb.abort();
            setState({
                ...state,
                error: "Request Cancelled"
            })
        }
    }
    // console.log(state)
    return [state, handleCancelRequest];
}
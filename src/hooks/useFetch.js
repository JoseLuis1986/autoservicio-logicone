import { useEffect, useRef, useState } from 'react';
import { fetchWithToken } from '../helpers/fetch';



export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetchWithToken(url)
            .then(resp => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: resp.data
                    });
                }
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: "no se pudo cargar la informacion"
                })
            })
    }, [url])

    return state;
}
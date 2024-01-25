const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = async (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    if (method === 'GET') {
        try {
            const resp = await fetch(url);
            const result = await resp.json();
            return result;
        } catch (err) {
            return {
                error: err.message
            }
        }
    } else {
        try {
            const resp = await fetch(url, {
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result1 = await resp.json();
            return result1;
        } catch (err) {
            return {
                error: err.message
            }
        }
    }
}

export const fetchRegister = async (endpoint, data, method) => {
    const url = `${baseUrl}/${endpoint}`;
    try {
        const resp = await fetch(url, {
            method,
            body: data
        });
        const result1 = await resp.json();
        return result1;
    } catch (err) {
        return {
            error: err.message
        }
    }
}

export const fetchWithToken = async (endpoint, data = {}, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    const token = JSON.parse(localStorage.getItem('token')) || undefined;
    // const { access_token } = token;
    // const timeExpire = await getTimeExpire(not_before);

    if (method === 'GET') {
        try {
            const resp = await fetch(url, {
                headers: {
                    'authorization': token
                }
            });
            const result = await resp.json();
            return result;
        } catch (err) {
            return {
                error: err.message
            }
        }
    } else {
        try {
            const resp = await fetch(url, {
                method,
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(data)
            });
            const result = await resp.json();
            return result;
        } catch (err) {
            return {
                error: err.message
            }
        }
    }
}

// export const fetchExternalWithToken = async ( endpoint, data, method = 'GET') => {
//     const url = `${baseUrl}/${endpoint}`;
//     const config = await fetchWithoutToken('login');
//     if (config.success) {
//         localStorage.setItem('token', JSON.stringify(config.token.access_token))
//     } else {
//         setLoading(false)
//         dispatch({
//             type: types.newIntent,
//             payload: {
//                 intent: 'error',
//                 messages: config.result
//             }
//         })
//     }
// }
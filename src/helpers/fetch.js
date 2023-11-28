
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


export const fetchWithToken = async (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || undefined;

    if (method === 'GET') {
        try {
            const resp = await fetch(url, {
                headers: {
                    'x-token': token
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
                    'x-token': token
                },
                body: JSON.stringify(data)
            });
            const result = await resp.json();
            return result;
        } catch (err) {
            console.log(err);
            return {
                error: err.message
           }
        }
    }
}
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


export const fetchWithToken = async (endpoint, data = {}, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    const token = JSON.parse(localStorage.getItem('token')) || undefined;
    const { access_token } = token;
    // const timeExpire = await getTimeExpire(not_before);

    if (method === 'GET') {
        try {
            const resp = await fetch(url, {
                headers: {
                    'authorization': access_token
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
                    'Authorization': access_token
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
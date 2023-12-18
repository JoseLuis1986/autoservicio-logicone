
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
        console.log(data)
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


export const fetchWithToken = async (endpoint, data= {}, method = 'GET') => {

    console.log(endpoint);
    
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || undefined;

    if (method === 'GET') {
        try {
            const resp = await fetch(url, {
                headers: {
                    'authorization': 'Bearer '+token
                }
            });
            const result = await resp.json();
            return result;
        } catch (err) {
            console.log('error en el servidor', err);
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
                    'Authorization': 'Bearer '+ token
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
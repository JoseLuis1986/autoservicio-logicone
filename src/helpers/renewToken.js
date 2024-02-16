import { fetchWithoutToken } from "./fetch";

export const renewToken = async () => {
    //se verifica si existe un registro de configuracion 
    try {
        const config = await fetchWithoutToken('login');
        console.log(config);
        /*{
            Si existe una configuracion previa se navega directamente al login del empleado
            y se almacena el token en localstorage
        }*/
        if (config.success) {
            localStorage.setItem('token', JSON.stringify(config.token.access_token))
            localStorage.setItem('logo', config.imageLogo ? JSON.stringify(config.imageLogo) : null)
            localStorage.setItem('imageBg', config.backgroundImage ? JSON.stringify(config.backgroundImage) : null)
            return { success: config.success, data: config }
        } else {
            return { success: false, data: config.result }
        }
    } catch (error) {
        console.log(error);
    }
}
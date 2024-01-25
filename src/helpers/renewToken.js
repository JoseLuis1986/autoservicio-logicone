import { fetchWithoutToken } from "./fetch";

export const renewToken = async () => {
    //se verifica si existe un registro de configuracion 
    const config = await fetchWithoutToken('login');
    /*{
        Si existe una configuracion previa se navega directamente al login del empleado
        y se almacena el token en localstorage
    }*/
    if (config.success) {
        localStorage.setItem('token', JSON.stringify(config.token.access_token))
        localStorage.setItem('logo', JSON.stringify(config.imageLogo))
        localStorage.setItem('imageBg', JSON.stringify(config.backgroundImage))
        return { success: config.success, data: config }
    } else {
        return { success: false, data: config.result }
    }
}
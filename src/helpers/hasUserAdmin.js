import { fetchWithoutToken } from "./fetch";

export const hasUserAdmin = async () => {
   //se verifica si existe un registro de configuracion 
   try {
       const config = await fetchWithoutToken('login/user-admin');
       /*{
           Si existe un usuario previo se navega directamente al login del empleado
       }*/
       if (config.success) {
           return { success: config.success, data: config.data }
       } else {
           return { success: false, data: config.data }
       }
    
   } catch (error) {
        console.log(error); 
   }
}

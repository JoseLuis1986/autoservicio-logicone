import { fetchWithoutToken } from "./fetch";

export const hasUserAdmin = async () => {
   //se verifica si existe un registro de configuracion 
   const config = await fetchWithoutToken('login/user-admin');
   /*{
       Si existe un usuario previo se navega directamente al login del empleado
   }*/
   if (config.success) {
       return { success: config.success, data: config.result }
   } else {
       return { success: false, data: config.result }
   }
}

import { types } from "../../types/types";

// const initialState = {
//     uid: '',
//     chatActive: null, //UID del usuario al que yo quiero enviar mensajes 
//     users: [], // Todos los usuarios de la base de datos
//     msjs: [] //el chat seleccionado 
// }
// const initialState = {
//     id: '',
//     intent: null,
//     messages: [],//el mensaje seleccion
// }

export const alerts = (state, action) => {

    switch (action.type) {

        case types.newIntent:
            return {
                ...state,
                ...action.payload
            }

        case types.closeSession:
            return {
                id: '',
                intent: null,
                messages: [],
            }

        default:
            return state;
    }
}
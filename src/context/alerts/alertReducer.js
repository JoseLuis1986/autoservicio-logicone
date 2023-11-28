import { types } from "../../types/types";

// const initialState = {
//     id: '',
//     intent: null,
//     messages: [],//el mensaje seleccion
// }

export const alertReducer = (state, action) => {
    switch (action.type) {

        case types.newIntent:
            return {
                ...state,
                ...action.payload
            }

        case types.cleanMessage:
            return {
                intent: null,
                messages: [],
            }

        default:
            return state;
    }
}
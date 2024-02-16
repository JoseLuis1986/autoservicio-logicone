import { types } from "../../types/types";

// const initialState = {
//     id: '',
//     intent: null,
//     messages: [],//el mensaje seleccion
// }

export const configReducer = (state, action) => {
    switch (action.type) {

        case types.hasUserAdmin:
            return {
                isAdmin: action.payload,
            }

        default:
            return state;
    }
}
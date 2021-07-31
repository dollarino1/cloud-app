import { registration } from "../api/user"

const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

const initialState = {
    currentUser: {},
    isAuth: false,
    errorMsg: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMsg: action.errorMsg
            }
        default:
            return state
    } 
}
export const setErrorMessage = (errorMsg) => ({type: SET_ERROR_MESSAGE, errorMsg})

export default userReducer
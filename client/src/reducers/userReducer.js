const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR'
const SET_REGISTRATION_ERROR = 'SET_REGISTRATION_ERROR'
const SET_USER = 'SET_USER'
const LOG_OUT ='LOG_OUT'

const initialState = {
    currentUser: {},
    isAuth: false,
    loginError: null,
    regError: null,
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            }
        case SET_REGISTRATION_ERROR:
            return {
                ...state,
                regError: action.regError
            }
        case SET_USER:
            return {
                ...state,
                currentUser: action.user,
                isAuth: true
            }
        case LOG_OUT:
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    } 
}
export const setLoginError = (loginError) => ({type: SET_LOGIN_ERROR, loginError})
export const setRegError = (regError) => ({type: SET_REGISTRATION_ERROR, regError})
export const setUser = (user) => ({type: SET_USER, user}) 
export const logout = () => ({type: LOG_OUT})

export default userReducer
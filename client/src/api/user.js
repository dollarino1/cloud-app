import axios from 'axios'
import { setLoginError, setRegError, setUser } from '../reducers/userReducer'

export const registration = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/registration', {
                email,
                password
            })
            console.log(response.data)
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log('Registration response data: ', response.data.message)
        } catch(e) {
            dispatch(setRegError(e.response.data.message))
            console.log('Registration error: ', e.response.data.message)
        }
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            })
            console.log(response.data)
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log('login response data: ', response.data.message)
        } catch(e) {
            dispatch(setLoginError(e.response.data.message))   
            console.log('login error: ', e.response.data.message)
        }
    }
}

export const auth = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/auth', {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log('login response data: ', response.data.message)
        } catch(e) {
            localStorage.removeItem('token')
        }
    }
}
import axios from 'axios'

export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password
        })
        console.log('Registration response data: ', response.data.message)
    } catch(e) {
        console.log('Registration error: ', e.response.data.message)
    }

}
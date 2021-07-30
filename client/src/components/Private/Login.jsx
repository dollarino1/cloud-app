import React from 'react'

const Login = () => {
    return (
        <div className='auth'>
            <div className='auth__wrapper'>
                <label htmlFor="emailForm">Email</label>
                <input type='email' id="emailForm"></input>

                <label htmlFor="passwordForm">Password</label>
                <input type='password' id='passwordForm'></input>
                
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Login

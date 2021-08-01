import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../api/user'
import Input from '../utils/Input'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const error = useSelector(state => state.users.loginError)

    return (
        <div className='auth'>
            <div className='auth__wrapper'>
                <h3>Authorization</h3>
                <label htmlFor="emailForm">Email</label>
                <Input type='email' value={email} setValue={setEmail}/>

                <label htmlFor="passwordForm">Password</label>
                <Input type='password' value={password} setValue={setPassword}/>
                {error && <span className="auth__error">{error}</span>}
                <button onClick={() => dispatch(login(email, password))}>Sign In</button>
            </div>
        </div>
    )
}

export default Login

import React, { useState } from 'react'
import { registration } from '../../api/user'
import Input from '../utils/Input'
import { useSelector, useDispatch } from 'react-redux';

const Registration = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const error = useSelector(state => state.users.regError)
    const dispatch = useDispatch()
    return (
        <div className='auth'>
            <div className='auth__wrapper'>
                <h3>Registration</h3>
                <label htmlFor="emailForm">Email</label>
                <Input type='email' value={email} setValue={setEmail}/>

                <label htmlFor="passwordForm">Password</label>
                <Input type='password' value={password} setValue={setPassword}/>
                {error && <span className="auth__error">{error}</span>}
                
                <button onClick={ () => dispatch(registration(email, password))}>Sign Up</button>
            </div>
        </div>
    )
}

export default Registration

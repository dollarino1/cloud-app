import React, { useState } from 'react'
import { registration } from '../../api/user'
import Input from '../utils/Input'

const Registration = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='auth'>
            <div className='auth__wrapper'>
                <label htmlFor="emailForm">Email</label>
                <Input type='email' value={email} setValue={setEmail}/>

                <label htmlFor="passwordForm">Password</label>
                <Input type='password' value={password} setValue={setPassword}/>
                <button onClick={ () => registration(email, password)}>Sign Up</button>
            </div>
        </div>
    )
}

export default Registration

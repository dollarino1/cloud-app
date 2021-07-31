import React, { useEffect, useState } from 'react'
import { registration } from '../../api/user'
import { getErrorMessage } from '../../reducers/userReducer'
import Input from '../utils/Input'
import { useDispatch, useSelector } from 'react-redux';

const Registration = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const error = useSelector(state => state.users.errorMsg)
    console.log(error)
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

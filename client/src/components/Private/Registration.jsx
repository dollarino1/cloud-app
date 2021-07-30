import React from 'react'

const Registration = () => {
    return (
        <div className='auth'>
            <div className='auth__wrapper'>
                <label htmlFor="emailForm">Email</label>
                <input type='email' id="emailForm"></input>

                <label htmlFor="passwordForm">Password</label>
                <input type='password' id='passwordForm'></input>
                <input></input>
                <input></input>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Registration

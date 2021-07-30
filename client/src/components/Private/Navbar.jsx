import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className="navbar">
            <div>Logo</div>
            <ul className="navbar__right">
                <li className="navbar__item"><NavLink to='/login'>Sign In</NavLink></li>
                <li className="navbar__item"><NavLink to='/registration'>Sign Up</NavLink></li>
            </ul>
        </header> 
    )
}

export default Navbar

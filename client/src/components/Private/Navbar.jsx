import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__wrapper">
                <div>Logo</div>
                <ul className="navbar__right">
                    <li className="navbar__item"><NavLink to='/login'>Sign In</NavLink></li>
                    <li className="navbar__item"><NavLink to='/registration'>Sign Up</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

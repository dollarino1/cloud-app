import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../reducers/userReducer'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    const isAuth = useSelector(state => state.users.isAuth)
    const dispatch = useDispatch()

    return (
        <nav className='navbar'>
            <div className="navbar__wrapper">
                <div><img className='logo' src={logo} alt='logo'/></div>
                <ul className="navbar__right">
                    {!isAuth && <li className="navbar__item"><NavLink to='/login'>Sign In</NavLink></li>}
                    {!isAuth && <li className="navbar__item"><NavLink to='/registration'>Sign Up</NavLink></li>}
                    {isAuth &&<li className="navbar__item" onClick={() => dispatch(logout())}>Log out</li>}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

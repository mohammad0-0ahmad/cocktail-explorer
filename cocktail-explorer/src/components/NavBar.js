import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styling/NavBar.css'
const NavBar = () => {
    return (
        <nav id='NavBar'>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/explore'>
                Explore
            </NavLink>
        </nav>
    )
}

export default NavBar;
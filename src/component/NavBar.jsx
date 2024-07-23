import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <Link to="/cart" className="nav-link">
                Cart
            </Link>
        </nav>
    )
}

export default NavBar

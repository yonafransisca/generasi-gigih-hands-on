import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/search"  className="link">Search</Link>
            <Link to="/trending" className="link">Trending</Link>
        </div>
    )
}

export default Navbar

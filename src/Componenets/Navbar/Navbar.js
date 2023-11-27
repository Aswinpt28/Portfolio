import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <div className='nav-links'>
                <ul>
                    <li><Link
                        to='/'>Home</Link></li>
                    <li><Link
                        to='/about'>About</Link></li>
                    <li><Link
                        to='/portfolio'>Portfolio</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
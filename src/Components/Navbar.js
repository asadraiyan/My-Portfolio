import React from 'react'
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <div className="logo">
            <h2>Asad Raiyan</h2>
        </div>
        <div className="navlink">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>
        </div>
    </nav>
    <div className="hamburger-menu">
        <a href="">
            <GiHamburgerMenu/>
        </a>

    </div>
    </>
  )
}

export default Navbar

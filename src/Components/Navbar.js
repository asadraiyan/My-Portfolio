import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { useMediaQuery } from "react-responsive";
const Navbar = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
   const[showMediaIcons, setshowMediaIcons]= useState(true)
   
   const handleClick = () =>{
   setshowMediaIcons(!showMediaIcons)
   }

    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <span>Asad Raiyan</span>
                </div>
                <div className={isMobile ? (showMediaIcons ? "sideNav hidden" : "sideNav") : "navlink"}>
                    <Link to="/" onClick={handleClick}>Home</Link>
                    <Link to="/About" onClick={handleClick}>About</Link>
                    <Link to="/Projects" onClick={handleClick}>Projects</Link>
                    <Link to="/Contact" onClick={handleClick}>Contact</Link>
                </div>
                {isMobile ? (
                    <div className="menu-icons" onClick={handleClick}>
                        <i>{showMediaIcons ? <TfiMenu/> :<TfiClose/> }</i>
                    </div>
                ) : <></>}
            </nav>

        </>
    )
}

export default Navbar

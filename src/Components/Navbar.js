import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { useMediaQuery } from "react-responsive";
const Navbar = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
    const [showMediaIcons, setshowMediaIcons] = useState(true)
    const [activeClass, setActiveClass] = useState("Home")

    const handleClick = () => {
        setshowMediaIcons(!showMediaIcons)
    }

    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <span>Asad Raiyan</span>
                </div>
                <div className={isMobile ? (showMediaIcons ? "sideNav hidden" : "sideNav") : "navlink"}>
                    <div className={activeClass === "Home" ? "active" : ""} onClick={() => setActiveClass("Home")}><Link to="/" onClick={handleClick}>Home</Link> </div>
                    <div className={activeClass === "About" ? "active" : ""} onClick={() => setActiveClass("About")}><Link to="/About" onClick={handleClick}>About</Link></div>
                    <div className={activeClass === "Projects" ? "active" : ""} onClick={() => setActiveClass("Projects")}><Link to="/Projects" onClick={handleClick}>Projects</Link></div>
                    <div className={activeClass === "Contact" ? "active" : ""} onClick={() => setActiveClass("Contact")}>  <Link to="/Contact" onClick={handleClick}>Contact</Link></div>
                </div>
                {isMobile ? (
                    <div className="menu-icons" onClick={handleClick}>
                        <i className='icons'>{showMediaIcons ? < TfiMenu /> : <TfiClose />}</i>
                    </div>
                ) : <></>}
            </nav>

        </>
    )
}

export default Navbar

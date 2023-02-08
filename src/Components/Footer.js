import React from 'react'
import './Footer.css';
import { ImLocation2 } from "react-icons/im";
import { FiPhoneOutgoing } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <ImLocation2 />
                        <div className="address">
                            <p>541 A/P New Haider Ganj</p>
                            <p>Campbell Road, Lucknow</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FiPhoneOutgoing />
                            <span className='phn'>8181079906</span>
                        </h4>
                    </div>
                    <div className="email">
                        <h4><GrMail />
                            <span className='mail'> asadraiyan001@gmail.com</span>
                        </h4>
                    </div>
                </div>
                <div className="right-side">
                    <div className="copyright">
                        <span className='build'>© 2023, Build with React Js</span>
                        <div className="social-container">
                <a href="https://github.com/asadraiyan" target ="_blank" rel="noreferrer" className = "social"><FaGithub /></a>
                <a href="https://twitter.com/raiyan_asad?t=vzNMJaOErNJDbeT5XjOR4A&s=09" target ="_blank" rel="noreferrer" className ="social"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/asad-raiyan-486326188" target ="_blank" rel="noreferrer" className = "social"><FaLinkedin /></a>
                <a href="https://m.facebook.com/asad.raiyan?mibextid=ZbWKwL" target ="_blank" rel="noreferrer" className = "social"><FaFacebookSquare /></a>
                <a href="https://www.instagram.com/asad.raiyan/?igshid=ZDdkNTZiNTM%3D" target ="_blank" rel="noreferrer" className = "social"><FaInstagramSquare /></a>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import './Footer.css';
import { ImLocation2 } from "react-icons/im";
import { FiPhoneOutgoing } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'

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
                <div className="right">
                    <h2 className='skills'>My Skills</h2>
                    <div className="web-container">
                        <div className="html">
                            <img className='html-img' src={html} alt="html" />
                        </div>
                        <div className="css">
                            <img className='css-img' src={css} alt="css" />
                        </div>
                        <div className="javascript">
                            <img className='javascript-img' src={javascript} alt="javascript" />
                        </div>
                        <div className="react">
                            <img className='react-img' src={react} alt="react" />
                        </div>
                        <div className="github">
                            <img className='github-img' src={github} alt="github" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import './Footer.css';
import { ImLocation2 } from "react-icons/im";
import { FiPhoneOutgoing } from "react-icons/fi";
import { GrMail } from "react-icons/gr";


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
            </div>
        </div>
    )
}

export default Footer
import "./FooterStyles.css"


import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaFacebook} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                         <p>Arba Minch</p>
                         <p>South Ethiopia</p>
                         <p>Ethiopia</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                +251-922-14-7734
                +251-923-39-5069
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                shimelisget2@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4> About the Company</h4>
                <p> This is me Shimelis. CEO & Founder of Mutse Tech. I enjoy discussing new project and design Challenge </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
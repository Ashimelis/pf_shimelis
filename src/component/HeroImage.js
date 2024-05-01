import "./HeroImageStyle.css"
import React from 'react'
import Introimage from "../asset/intro2.jpg"
import {Link} from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img"
        src={Introimage} alt="Introimage"/>
      </div>
      <div className="content">
       <p> HI, I' A FREELANCER.</p>
       <h1>React Developer</h1>
       <div>
        <Link to="/Project"
        className="btn">Projects</Link>
        <Link to="/Contact"
        className="btn-light">Contacts</Link>
       </div>
      </div>
    </div>
  );
}

export default HeroImage;
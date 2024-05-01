import React from 'react'
import Navbar from "../component/Navbar"
import Footer from '../component/Footer'
import HeroImage from '../component/HeroImage'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="ABOUT." text="I'm Friendly Fullstack Web developer."/>
      <Footer/>
    </div>
  )
}

export default About

import React from "react";
import './heroSection.scss'
const HeroSection = ()=>{
    return(
    <div className="hero-container flex">
        <div className="content-container flex ">
            <div className="content-image ">
            <img src="https://www.conversation.ai/hubfs/left%20logo.png" alt="" />
        </div>
        <div className="content-heading">
            <h1 className="primary-heading">Demystifying AI for<br/> Business  </h1>
            <span>Interviews | Analysis | Research </span>
        </div>
        </div>
    </div>
)}

export default HeroSection;
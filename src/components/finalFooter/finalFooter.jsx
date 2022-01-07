import React from "react";
import './finalFooter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons' 

const FinalFooter = ()=>{
    return(
        <div className="final-footer flex">
            <div className="image-container">
                <img src="https://www.conversation.ai/hubfs/Logo-Tagline%20horizontal%20(2).svg" alt="" />
            </div>
            <h2>Conversations on AI is a Haptik initiative for the world's leading minds <br/> to exchange thoughts around the business of AI</h2>
            <div className="social-handles flex">
                <h1>Find us on</h1>
                <FontAwesomeIcon style={{marginLeft:'1rem'}} icon={faLinkedin} size="3x"/>
                <FontAwesomeIcon style={{marginLeft:'1rem'}} icon={faYoutube} size="3x"/>
            </div>
        </div>
    )
}

export default  FinalFooter
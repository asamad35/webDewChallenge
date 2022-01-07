import React from "react";
import './interviewSection.scss'

const InterviewSection = ()=>{
    return(
        <div className="interview-section flex"> 
            <div className="image-container">
                <img src="https://www.conversation.ai/hubfs/Card-homepage-Dec-20-2021-12-36-36-65-PM.png" alt=""  />
            </div>
            <div className="text-container flex">
                <h2 className="secondary-heading">Interview</h2>
                <h1 className="primary-heading">Enabling better Customer Service</h1>
                <p>
                According to IDC, by 2021, 65 percent of organizations will transition to digital-first through contactless experiences and automated operations. With technology leaders realigning and rethinking their customer engagement strategies, we host contact center expert, Aarde Cosseboom to focus on an ever-changing digital world...
                </p>

                <a href="" className="primary-btn">Watch Now</a>
            </div>
        </div>
    )
}
export default InterviewSection
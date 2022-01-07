import React from "react";
import './footer.scss'

const Footer = ({children,backgroundColor, btnBackground, btnColor}) =>{
    return(
    <div className="footer flex" style={{backgroundColor:backgroundColor}} >
    <h1 className="primary-heading">{children}</h1>
    <form action="" className="flex">
    <input type="email" placeholder="Email Address*" />
    <button className="primary-btn" style={{backgroundColor:btnBackground, color:{btnColor}}}>Subscribe</button>
    </form>
    </div>
)}

export default Footer;
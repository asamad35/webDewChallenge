import React from "react";

import './Navbar.scss'

const Navbar = ()=>{
    return(
        <div className="nav-bar flex">
            <div className="logo">
                <img className="logo-img" src="https://www.conversation.ai/hs-fs/hubfs/small%20logo%20(1).png?width=107&height=107&name=small%20logo%20(1).png" alt=""  />
            </div>
            <ul className="nav-links flex">
            <li className="nav-link"><a href="">Interviews</a></li>
            <li className="nav-link"><a href="">Research</a></li>
            <li className="nav-link"><a href="">Subscribe</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
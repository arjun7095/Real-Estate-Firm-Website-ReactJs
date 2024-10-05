import React from "react";
import './footer.css';
import { NavLink } from "react-router-dom";
function Footer(){
    return(
        <>
            <div className="main">
                <div className="left1">

                    <span className="header"><img src=".././images/logo.png" height="40px" width="100px"alt="img" />AYVAN PROPERTIES</span>
                </div>
                <div align="center" className="middle">
                    <NavLink className='link' to="/">Home</NavLink><br />
                    <NavLink className='link' to="/all">Properties</NavLink><br />
                    <NavLink className='link' to="/news">News</NavLink><br />
                    <NavLink className='link' to="/team">Team</NavLink><br />
                    <NavLink className='link' to="/contact">Contact</NavLink>
                </div>
                <div align="center" className="right1">
                    <h4>500 Terry Francine Stree<br/> San Francisco,CA 94158<br/>info@mysite.com</h4>
                </div>
                
            </div>
            <div className="footer">
                    <span>© 2024 by AYVAN. Powered and secured by Navya</span>
                </div>
        </>
    );
}
export default Footer;

import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
    
    const [isMobile, setIsMobile] = useState(false);
    
    return (
        <nav className="navbar">
            
            <h3 className="logo">Logo</h3>
            <ul onClick={() => setIsMobile(false)} className={isMobile? "nav-links-mobile" : "nav-links"}>
                
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="about">
                    <li>About</li>
                </Link>

            </ul>
            <button onClick={() => setIsMobile(!isMobile)} className="mobile-menu-icon">
                {isMobile ? (
                    <i className="fa fa-times"></i>
                ) : (
                    <i className="fa fa-bars"></i>
                )}
            </button>
            
        </nav>
    )
}

export default Navbar

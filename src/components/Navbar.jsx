import React from "react";
import logo from "../images/inno logo.jpeg";
function Navbar(){
    return (
        <nav className="navbar">
           <div className="navbar-brand">
  <img src={logo} alt="Innos Consultancy logo" className="navbar-logo-img" />
  <h1 className="navbar-logo">INNOS CONSULTANCY</h1>
</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                 <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                   <li><a href="#destinations">Destinations</a></li>
                    <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;
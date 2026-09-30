import React from "react";

const Footer = () => {
  return (
    <footer>
        <div className="foot">
              <ul>
                <li><a href="#home">Home</a></li>
                 <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                   <li><a href="#destinations">Destinations</a></li>
                    <li><a href="#contact">Contact Us</a></li>
            </ul>
           <p className="foot-text">&copy; 2024 Innos Consultancy. All rights reserved.</p>   
        </div>
    
    </footer>
  );
};

export default Footer;
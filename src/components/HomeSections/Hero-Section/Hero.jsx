import React from 'react';
import './Hero.css';
import Navbar1 from '../../Navbar1/Navbar1';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <Navbar1 />
      
      <div className="content-wrapper">
        <div className="left-section">
          <div className="geometric-container">
            <img 
              src="/Group.png" 
              alt="Geometric Design" 
              className="group-image"
            />
            
            <img 
              src="/Rectangle 22.png" 
              alt="Small Rectangle Top" 
              className="rectangle-22-top"
            />
            
            <div className="ellipse-5-top"></div>
            
            <img 
              src="/Rectangle 22.png" 
              alt="Small Rectangle Bottom" 
              className="rectangle-22-bottom"
            />
            
            <div > 

                <img src="/Rectangle 9635.png"  className="ellipse-5-bottom" />
            </div>
          </div>
        </div>

        <div className="right-section">
          <h1 className="main-text">
            قسطها وانت مرتاح<br />
            مع تمويل يصل إلى
            <span className="amount-container">
  <span className="amount">50,000</span>
  <img src="/Vector.png" className="amount-icon" />
</span>
          </h1>
          <button className="cta-button">اطلب تمويلك الآن</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
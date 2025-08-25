import React from 'react';
import './Calculating.css';

const Calculating = () => {
  return (
    <div className="calculating-container">
      <div className="calculating-content">
        <div className="calculating-left">
          <button className="request-financing-btn">
            <span className="btn-text">اطلب تمويلك الآن</span>
          </button>
        </div>
        
        <div className="calculating-right">
          <div className="title-section">
            <h2 className="main-title">احسب تمويلك مع فيول</h2>
            <div className="calculator-icon">
              <img 
                src="/icons/hugeicons_calculator.png" 
                alt="Calculator Icon" 
                width="44" 
                height="44"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculating;

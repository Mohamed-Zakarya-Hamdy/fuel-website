import React, { useState } from 'react';
import './SecondSection.css';

const SecondSection = () => {
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Inquiry submitted:', inquiry);
    setInquiry('');
  };

  return (
    <div className="second-section-container">
      <div className="second-section-content">
        <div className="inquiry-container">
          <div className="inquiry-header">
            <h2 className="inquiry-title">
              لم تجد إجابة على استفساراتك؟
            </h2>
            <p className="inquiry-subtitle">
              تواصل معنا وسيقوم فريق خدمة العملاء بالرد عليك في أقرب فرصة
            </p>
          </div>
          
          <div className="inquiry-form-container">
            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="input-container">
                <textarea
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                  placeholder="ما الذي ترغب في معرفته؟"
                  className="inquiry-input"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                ارسل استفسارك
              </button>
            </form>
          </div>
        </div>
        
        <div className="inquiry-image">
          <img src="/image 12.png" alt="Inquiry" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

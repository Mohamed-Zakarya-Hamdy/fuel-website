import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-content">
          <div className="company-section">
            <h2 className="company-title">فيول للتمويل</h2>
            <p className="company-description">
              شركة سعودية مرخصة من قبل البنك المركزي السعودي لممارسة نشاط التمويل الاستهلاكي المصغر برخصة رقم 86/أش/202302
            </p>
          </div>

          <div className="about-section">
            <ul className="footer-links">
              <li>

                <Link to="/AboutUs">
                  عن فيول للتمويـــل
                </Link>


              </li>
              <li>
                <Link to="/Consumer-finance">الهيئة الشرعية</Link>
              </li>
              <li>
                <Link to="/Investor-Relations">الشروط والأحكام</Link>
              </li>
              <li>
                <Link to="/Product-Prices
">سياسة الخصوصية
                </Link>
              </li>

            </ul>
          </div>

          <div className="financing-section">
            <ul className="footer-links">
              <li>طلـــب التمويــــــل</li>
              <li>المنتجات التمويلية</li>
              <li>
                <Link to="/Financing-Calculator
"> حاسبه التمويل
                </Link>
              </li>              <li>الأسئلة الشائعة</li>
            </ul>
          </div>

          <div className="contact-section">
            <ul className="footer-links">
              <li>تواصل معنا</li>
              <li>
                <div className="social-icons">
                  <span className="social-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FFFFFF" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm0 2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zM18 6.6a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" />
                    </svg>
                  </span>
                  <span className="social-icon" aria-hidden>
                    <svg viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FFFFFF" d="M17.53 7H15.2l-3.1 3.9L8.8 7H6.47l4 5.2-4 5.3H8.8l3.3-4.1 3.1 4.1h2.33l-4.14-5.4 4.14-5.1z" />
                    </svg>
                  </span>
                  <span className="social-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FFFFFF" d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0l8 6 8-6H4zm16 12V8l-8 6-8-6v10h16z" />
                    </svg>
                  </span>
                  <span className="social-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FFFFFF" d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.1.37 2.29.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.74 22 2 13.26 2 2.99a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.49.57 3.59a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="phone-label">الرقم المجاني</li>
              <li className="phone-number">8001184000</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <div className="copyright-text">
            جميع الحقوق محفوظة فيول للتمويل 2025 - شركة سعودية مرخصة خاضعة لرقابة وإشراف البنك المركزي السعودي
          </div>
          <div className="footer-logo-container">
            <img src="/Group 5.png" alt="فيول" className="footer-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
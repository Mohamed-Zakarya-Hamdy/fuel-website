import React from 'react';
import './HomeSectionThree.css';

const HomeSectionThree = () => {
  return (
    <section className="hs3-container" dir="rtl">
      <div className="hs3-inner">
        <h2 className="hs3-heading">المركز الإعلامي</h2>

        <div className="hs3-grid">
          {/* Card 1 */}
          <article className="hs3-card">
            <div className="hs3-media hs3-media--dark" aria-hidden="true" />
            <div className="hs3-content">
              <h3 className="hs3-title">عنوان المقالة هنا</h3>
              <a href="#" className="hs3-link" aria-label="اعرف المزيد عن المقالة">
                <span>اعرف المزيد</span>
                <svg className="hs3-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 12h12M12 6l6 6-6 6" stroke="#8381FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </article>

          {/* Card 2 */}
          <article className="hs3-card">
            <div className="hs3-media hs3-media--dark" aria-hidden="true" />
            <div className="hs3-content">
              <h3 className="hs3-title">عنوان المقالة هنا</h3>
              <a href="#" className="hs3-link" aria-label="اعرف المزيد عن المقالة">
                <span>اعرف المزيد</span>
                <svg className="hs3-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 12h12M12 6l6 6-6 6" stroke="#8381FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </article>

          {/* Card 3 */}
          <article className="hs3-card">
            <div className="hs3-media hs3-media--image" aria-hidden="true" />
            <div className="hs3-content">
              <h3 className="hs3-title">عنوان المقالة هنا</h3>
              <a href="#" className="hs3-link" aria-label="اعرف المزيد عن المقالة">
                <span>اعرف المزيد</span>
                <svg className="hs3-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 12h12M12 6l6 6-6 6" stroke="#8381FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;



import React from 'react';
import './HomeSectionFour.css';

const HomeSectionFour = () => {
  return (
    <section className="hs4-container" dir="rtl">
      <div className="hs4-inner">
        <h2 className="hs4-heading">روابط مهمة</h2>

        <div className="hs4-row" aria-label="روابط مصورة">
          <div className="hs4-item hs4-item--wide">
            <img
              className="hs4-img hs4-img--g19"
              src={`${process.env.PUBLIC_URL}/Group 19.png`}
              alt="رابط مهم - مجموعة 19"
              loading="lazy"
            />
          </div>

          <div className="hs4-item hs4-item--mid">
            <img
              className="hs4-img hs4-img--g18"
              src={`${process.env.PUBLIC_URL}/Group 18.png`}
              alt="رابط مهم - مجموعة 18"
              loading="lazy"
            />
          </div>

          <div className="hs4-item hs4-item--narrow">
            <img
              className="hs4-img hs4-img--g17"
              src={`${process.env.PUBLIC_URL}/Group 17.png`}
              alt="رابط مهم - مجموعة 17"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionFour;

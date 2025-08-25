import React from "react";
import "./HeroSection.css";

function Hero() {
  return (
    
    <section className="financing-hero" dir="rtl">
     
      <div className="financing-hero__container">
        <div className="financing-hero__content">
          <h1 className="financing-hero__title">المنتجات التمويلية</h1>
          <h2 className="financing-hero__subtitle">تمويل الكاش</h2>
          <p className="financing-hero__description">
           تقدر تقدم على تمويلك الشخصي المتوافق مع أحكام الشريعة الإسلامية. تمويل يلبي احتياجاتك بإجراءات سهلة وسريعة دون الحاجة إلى كفيل أو تحويل الراتب.
          </p>
        </div>

        <div className="financing-hero__image-wrapper">
          <img
            src="/image 23.png"
            alt="تمويل المشتريات"
            className="financing-hero__image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;



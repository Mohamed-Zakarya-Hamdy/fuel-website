import React from "react";
import "./Hero.css";
import heroAsset from "./images/Asset 10 1.png";

function Hero() {
  return (
    
    <section className="financing-hero" dir="rtl">
     
      <div className="financing-hero__container">
        <div className="financing-hero__content">
          <h1 className="financing-hero__title">المنتجات التمويلية</h1>
          <h2 className="financing-hero__subtitle">تمويل المشتريات</h2>
          <p className="financing-hero__description">
            أحد الحلول التمويلية المتوافقة مع أحكام الشريعة الإسلامية التي يستطيع
            العملاء من خلاله شراء أصول من أجهزة ومعدات وأثاث وغيرها ودفع ثمنها
            بالتقسيط، حيث يمكنك تقسيط مشترياتك بشكل سريع وسهل لدى شركائنا، وذلك
            بشروط وإجراءات ميسرة تمامًا عبر تجربة رقمية كاملة، دون الحاجة لأوراق
            أو مراجعات.
          </p>
        </div>

        <div className="financing-hero__image-wrapper">
          <img
            src={heroAsset}
            alt="تمويل المشتريات"
            className="financing-hero__image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;



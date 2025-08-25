import React from "react";
import "./Features2.css";

function Features2() {
  const features = [
    { id: 1, text: "فترة سداد تصل إلى 36 شهر", icon: "/icons/Asset 18 1.png" },
    { id: 2, text: "مبلغ التمويل يصل إلى 50،000 ريال", icon: "/icons/Asset 14 1.png" },
    { id: 3, text: "بدون كفيل أو تحويل الراتب ولكل عملاء البنوك", icon: "/icons/Asset 17 1.png" },
    { id: 4, text: "متوافق مع ضوابط وأحكام الشريعة الإسلامية", icon: "/icons/Asset 15 1.png" },
  ];

  return (
    <section className="features1" dir="rtl">
      <div className="features1__overlay" />
      <div className="features1__container">
        <h2 className="features1__title">الميزات</h2>
        <div className="features1__grid">
          {features.map((feature) => (
            <div key={feature.id} className="features1__item">
              <img src={feature.icon} alt="" className="features1__icon-img" />
              <p className="features1__text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features2;



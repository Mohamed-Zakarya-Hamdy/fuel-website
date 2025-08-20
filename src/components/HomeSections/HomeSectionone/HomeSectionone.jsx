import React from 'react';
import './HomeSectionone.css';

const HomeSectionone = () => {
  return (
    <section className="hs1-container" dir="rtl">
      <div className="hs1-canvas">
        <div className="hs1-grid">
        {/* Card 1 */}
        <div className="hs1-card card-1">
          <h3 className="hs1-title">
            ما يحتاج كفيل أو
            <br />
            تحويل راتب
          </h3>
          <img className="card-icon" src="/image 20.png" alt="" loading="lazy" />
        </div>
        {/* Card 3 */}
        <div className="hs1-card card-3">
          <h3 className="hs1-title">
            متوافق مع أحكام
            <br />
            الشريعة الإسلامية
          </h3>
          <img className="card-icon" src="/image 19.png" alt="" loading="lazy" />
        </div>

        {/* Card 2 */}
     
        <div className="hs1-card card-2">
          <h3 className="hs1-title">
            تمويل سهل
            <br />
            وسريع يلبي
            <br />
            احتياجك
          </h3>
          <img className="card-icon" src="/image 21.png" alt="" loading="lazy" />
        </div>
        {/* Card 3 */}
        <div className="hs1-card card-3">
          <h3 className="hs1-title">
            متوافق مع أحكام
            <br />
            الشريعة الإسلامية
          </h3>
          <img className="card-icon" src="/image 22.png" alt="" loading="lazy" />
        </div>

        {/* Card 4 */}
        <div className="hs1-card card-4">
          <h3 className="hs1-title">
            مرونة في السداد
            <br />
            تصل إلى 60 شهر
          </h3>
          <img className="card-icon" src="/image 19.png" alt="" loading="lazy" />
        </div>
        </div>

        {/* Right text block */}
        <div className="hs1-right">
          <div className="hs1-right-title">ليش فيول خيارك الصحيح؟</div>
          <div className="hs1-right-body">
            ترتكز فيول للتمويل على خدمة العملاء في القطاعات الطبية والتعليمية أولًا ثم تمتد لأكثر من منتج وقطاع. نحن نعتز بقيمنا التي ترتكز على مبادئ الشريعة الإسلامية ونستند على قواعد راسخة للعمل المبدع القائم على ابتكار الخدمات التمويلية والإدراك الكامل لفهم عملائنا لتقديم أفضل المنتجات بحيث تلبي احتياجاتهم وتواكب تطلعاتهم.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionone;

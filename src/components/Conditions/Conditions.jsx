import React from 'react';
import './Conditions.css';

const Conditions = () => {
  return (
    <div className="conditions-container">
      {/* <h2 className="conditions-title">الشروط</h2> */}
      <div className="conditions-grid">
      <div className="condition-box">
      <p>موظف والحد الأدنى للراتب الشهري من 005.3 ريال</p>        </div>
        <div className="condition-box">
          <p>يجب أن لا يقل عمر مقدم الطلب عن 91 سنة</p>
        </div>
     
        <div className="condition-box">
          <p>تطبق الشروط والأحكام</p>
        </div>
        <div className="condition-box">
          <p>أن لا تقل مدة الخدمة عن شهر للقطاع الحكومي و3 أشهر للقطاع الخاص</p>
        </div>
     
      </div>
    </div>
  );
};

export default Conditions;
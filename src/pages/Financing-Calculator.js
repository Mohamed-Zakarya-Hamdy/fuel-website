import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar1 from "../components/Navbar1/Navbar1";
import "./Financing-Calculator.css";


const FinancingCalculator = () => {
	return (
		<>
      <div className="fc-bg">
        <Navbar1 />
        <main className="fc-page" >
          <div className="fc-container">
            <h1 className="fc-title">حاسبة التمويل</h1>

            <section className="fc-calc">
              <div className="fc-left-card">
                <div className="fc-left-title">مبلغ التمويل</div>
                <div className="fc-amount-circle">
                  <div className="fc-amount-value">20,000</div>
                  <div className="fc-amount-icon" aria-hidden />
                </div>
                <div className="fc-monthly">
                  <div className="fc-monthly-icon" aria-hidden />
                  <div className="fc-monthly-value"> 1,800</div>
                </div>
              </div>

              <div className="fc-right-card">
                <div className="fc-input-row">
                  <label className="fc-label">الراتب الشهري</label>
                  <input className="fc-input" type="text" placeholder="" />
                </div>
                <div className="fc-input-row">
                  <label className="fc-label">التمويل المطلوب</label>
                  <input className="fc-input" type="text" placeholder="" />
                </div>
                <div className="fc-input-row">
                  <label className="fc-label">الإلتزامات الشهرية</label>
                  <input className="fc-input" type="text" placeholder="" />
                </div>
                <div className="fc-input-row">
                  <label className="fc-label">مدة السداد</label>
                  <input className="fc-input" type="text" placeholder="" />
                </div>
                <div className="fc-input-row">
                  <label className="fc-label">تاريخ الميلاد</label>
                  <input className="fc-input" type="date" placeholder="" />
                </div>
                <div className="fc-input-row">
                  <label className="fc-label">الوظيفة</label>
                  <input className="fc-input" type="text" placeholder="" />
                </div>
              </div>
            </section>

            <div className="fc-cta">اطلب تمويلك الآن</div>

            <div className="fc-note"> الأرقام الظاهرة تعتبر أمثلة توضيحية فقط ولا تعتبر كعرض مقدم من الشركة</div>
          </div>
        </main>
        <Footer />
      </div>
		</>
	);
};

export default FinancingCalculator ;
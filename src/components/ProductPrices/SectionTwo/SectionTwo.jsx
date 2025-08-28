import React from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
	return (
		<section className="prices-sec-two">
			<div className="prices-sec-two__container" dir="rtl">
				<h3 className="sec-title">تمويل المشتريات</h3>

				<div className="prices-card">
					<div className="card-header">
						<span className="col">مبلغ القسط الشهري</span>
						<span className="col">معدل النسبة السنوي</span>
						<span className="col">الاستحقاق بالأشهر</span>
						<span className="col">مبلغ التمويل</span>
					</div>

					<div className="card-row">
						<span className="val"> 1033,33ريال سعودي</span>
						<span className="val">41,70%</span>
						<span className="val">12 شهر</span>
						<span className="val">10,000 ريال سعودي</span>
					</div>
					<div className="divider"/>
					<div className="card-row">
						<span className="val"> 925ريال سعودي</span>
						<span className="val">40,88%</span>
						<span className="val">24 شهر</span>
						<span className="val">15,000 ريال سعودي</span>
					</div>
					<div className="divider"/>
					<div className="card-row">
						<span className="val"> 955.56ريال سعودي</span>
						<span className="val">39,43%</span>
						<span className="val">32 شهر</span>
						<span className="val">20,000 ريال سعودي</span>
					</div>
				</div>

				<div className="disclaimer">
					<span className="disclaimer-title">إيضاح وتنبيه</span>
					<p className="disclaimer-text">
						قد يختلف معدل النسبة السنوي حسب السجل الائتماني للعميل و مبلغ التمويل ومدته. الأرقام الظاهرة أمثلة توضيحية فقط ولا تعتبر عرضا أو التزاما على شركة فيول. الرسوم الإدارية تعادل (1%) من مبلغ التمويل.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;



import React from "react";
import "./Sectionone.css";

const Sectionone = () => {
	return (
		<section className="prices-sec-one">
			<div className="prices-sec-one__container" dir="rtl">
				<h2 className="page-title">الإفصاح عن أسعار المنتجات التمويلية</h2>
				<div className="apr-block">
					<div className="apr-inner">
						<h3 className="apr-title">(APR)<br/>معدل النسبة السنوي</h3>
						<p className="apr-desc">
							هو معدل الخصم الذي تكون فيه القيمة الحالية لجميع الأقساط و الدفعات الأخرى المستحقة على المستفيد، التي تمثل إجمالي المبلغ المستحق سداده من المستفيد، مساوية للقيمة الحالية لدفعات مبلغ التمويل المتاحة للمستفيد،وذلك في التاريخ الذي يكون فيه المبلغ التمويل أو أول دفعة متاحًا للمستفيد
						</p>
					</div>
					<p className="apr-footnote">(وفقًا للمادة 81 من اللائحة التنفيذية لنظام مراقبة شركات التمويل)</p>
				</div>
			</div>
		</section>
	);
};

export default Sectionone;



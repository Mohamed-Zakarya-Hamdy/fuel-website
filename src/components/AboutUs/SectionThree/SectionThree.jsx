import React from "react";
import "./SectionThree.css";

const SectionThree = () => {
	return (
		<section className="aboutus-section-three">
			<div className="section-three__container" >
				<div className="cards">
					<div className="info-card">
						<div className="info-card__header">
							<img className="icon-img" src="/icons/Vector (1).png" alt="sms icon" />
							<h3 className="info-card__title">الرسالــــة</h3>
						</div>
						<p className="info-card__text">أن نكون خيارك الأول للتمويل الاستهلاكي المصغّر.</p>
					</div>

					<div className="info-card">
						<div className="info-card__header">
							<img className="icon-img" src="/icons/Vector (2).png" alt="vision icon" />
							<h3 className="info-card__title">الرؤيـــــــة</h3>
						</div>
						<p className="info-card__text">هدفنا تمكين كل فرد من الحصول على رغباته، بأسرع الطرق وأقل الخطوات.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionThree;



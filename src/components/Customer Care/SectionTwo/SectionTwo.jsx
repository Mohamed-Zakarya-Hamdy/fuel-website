import React from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
	return (
		<section className="cc-section-two" dir="rtl">
			<div className="cc-section-two__inner">
				<h2 className="cc-section-two__title">نموذج تقديم شكوى</h2>
				<form className="cc-section-two__form" onSubmit={(e) => e.preventDefault()}>
					<div className="cc-grid">
						<div className="cc-field">
							<input type="text" placeholder="الاسم الكامل" aria-label="الاسم الكامل" />
						</div>
						<div className="cc-field">
							<input type="tel" placeholder="رقم الهاتف" aria-label="رقم الهاتف" />
						</div>
						<div className="cc-field">
							<input type="email" placeholder="البريد الإلكتروني" aria-label="البريد الإلكتروني" />
						</div>
						<div className="cc-field">
							<input type="text" placeholder="رقم الهوية" aria-label="رقم الهوية" />
						</div>
					</div>
					<div className="cc-field cc-field--subject-block">
						<input type="text" placeholder="الموضوع" aria-label="الموضوع" />
					</div>
					<div className="cc-field cc-field--textarea">
						<textarea placeholder="محتوى الشكوى..." aria-label="محتوى الشكوى" rows={6} />
					</div>
					<div className="cc-section-two__footer">
						<p className="cc-note">كما يمكنكم إرسال الشكاوي عبر: care@fuelfinance.sa</p>
						<button type="submit" className="cc-button">التالي</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default SectionTwo;



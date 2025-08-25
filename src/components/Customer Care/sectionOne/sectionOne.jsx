import React from "react";
import "./sectionOne.css";

const SectionOne = () => {
	return (
		<section className="customer-care-section" dir="rtl">
			<div className="customer-care-container">
				<h2 className="customer-care-title">العناية بالعميل</h2>
				<p className="customer-care-description">
					ملتزمون بتقديم أفضل خدمة لعملائنا اكرام. نحن نقدم تفاعلكم معنا ونأخذ كل شكوى أو اقتراح على
					<br />
					محمل الجد. نحن نعمل جاهدين لحل أي مشكلة تواجهكم وتحسين تجربتكم مع فيول للتمويل.
				</p>
				<button type="button" className="customer-care-cta">
					<span className="customer-care-cta-icon" aria-hidden="true">
						{/* Inline SVG approximating the document-text icon from Figma */}
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14 2H8C6.343 2 5 3.343 5 5V19C5 20.657 6.343 22 8 22H16C17.657 22 19 20.657 19 19V7L14 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M14 2V7H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M9.5 13H12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M9.5 16H15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</span>
					<span className="customer-care-cta-text">مبادئ وقواعد حماية عملاء المؤسسات المالية</span>
				</button>
			</div>
		</section>
	);
};

export default SectionOne;



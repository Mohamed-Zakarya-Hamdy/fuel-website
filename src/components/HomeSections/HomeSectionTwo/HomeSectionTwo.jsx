import React from "react";
import "./HomeSectionTwo.css";

function HomeSectionTwo() {
	return (
		<section className="home-section-two" dir="rtl">
			<div className="hst-container">
				<h2 className="hst-title">المنتجات التمويلية</h2>
				<div className="hst-cards">
					<a href="#" className="hst-card hst-card--right" aria-label="مول مشترياتك - اعرف المزيد">
						<div className="hst-card-cta">
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<g transform="scale(-1,1) translate(-37,0)">
									<path d="M5 18.5H32" stroke="rgba(252,252,252,0.8)" strokeWidth="4" strokeLinecap="round"/>
									<path d="M23 8L32.5 18.5L23 29" stroke="rgba(252,252,252,0.8)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
								</g>
							</svg>
						</div>
						<div className="hst-card-content">
							<h3 className="hst-card-title">مول مشترياتك</h3>
							<span className="hst-card-link">اعرف المزيد</span>
						</div>
					</a>

					<a href="#" className="hst-card hst-card--left" aria-label="تمويل الكاش - اعرف المزيد">
						<div className="hst-card-cta">
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<g transform="scale(-1,1) translate(-37,0)">
									<path d="M5 18.5H32" stroke="rgba(252,252,252,0.8)" strokeWidth="4" strokeLinecap="round"/>
									<path d="M23 8L32.5 18.5L23 29" stroke="rgba(252,252,252,0.8)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
								</g>
							</svg>
						</div>
						<div className="hst-card-content">
							<h3 className="hst-card-title">تمويل الكاش</h3>
							<span className="hst-card-link">اعرف المزيد</span>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}

export default HomeSectionTwo;



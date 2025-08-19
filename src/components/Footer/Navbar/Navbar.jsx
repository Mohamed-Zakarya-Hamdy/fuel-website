import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<header className="nb-header" dir="rtl">
			<div className="nb-container">
				<div className="nb-row">
					<a className="nb-logo" href="/" aria-label="الرئيسية">
						<img src="\Group 1 (1).png" alt="Fuel" />
					</a>
					<nav className="nb-links" aria-label="روابط">
						<a className="nb-link" href="#">عن فيول</a>
						<a className="nb-link" href="#">المنتجات التمويلية</a>
						<a className="nb-link" href="#">حاسبة التمويل</a>
						<a className="nb-link" href="#">حماية العملاء</a>
						<a className="nb-link" href="#">تواصل معنا</a>
						<a className="nb-link" href="#">الشراكات</a>
					</nav>
					<div className="nb-actions">
					
						<a href="#" className="nb-button nb-button--outline">
							تسجيل الدخول
						</a>

                        <span className="nb-lang" style={{ color: "#369A68" }}>
                        <svg className="nb-lang-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
								<path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							EN
						
						</span>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar;



import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";

function Navbar2() {
	return (
		<header className="nb-header navbar2" dir="rtl">
			<div className="nb-container">
				<div className="nb-row">
					<a className="nb-logo" href="/" aria-label="الرئيسية">
						<img src="\Group 1.png" alt="Fuel" />
					</a>
					<nav className="nb-links" aria-label="روابط">
						<a className="nb-link" href="#">عن فيول</a>
						<Link className="nb-link" to="/financing-products">المنتجات التمويلية</Link>
						<Link className="nb-link" to="/second-financing-products">حاسبة التمويل</Link>
						<Link className="nb-link" to="/faq">حماية العملاء</Link>
						<Link className="nb-link" to="customer-care">تواصل معنا</Link>
						<a className="nb-link" href="#">الشراكات</a>
					</nav>
					<div className="nb-actions">
						
					<Link to="/login" className="nb-button nb-button--outline">
							تسجيل الدخول
						</Link>

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

export default Navbar2;



import React from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
	return (
		<section className="consumer-section-two">
			<div className="section-inner">
				<h3 className="section-title" >نموذج تقديم شكوى</h3>
				<div className="fields">
					<div className="field">
						<span className="field-text">Legal Name: Fuel Finace</span>
					</div>
					<div className="field">
						<span className="field-text">Registered Address: 3385 Al Thoumamah Rd , Al nada , Riyadh</span>
					</div>
					<div className="field">
						<span className="field-text">Moa’rif (Identifier): 558600BLGAQJZMF4TH13</span>
					</div>
					<div className="field-row">
						<div className="field half">
							<span className="field-text">Country:Saudi Arabia</span>
						</div>
						<div className="field half">
							<span className="field-text">City:Riyadh</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;



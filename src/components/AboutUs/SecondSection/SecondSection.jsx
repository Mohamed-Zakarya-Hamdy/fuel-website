import React from "react";
import "./SecondSection.css";

const MemberCard = ({ imageSrc, name, role }) => {
	return (
		<div className="member-card">
			<div className="member-image">
				<img src={imageSrc} alt={name} />
			</div>
			<div className="member-overlay">
				<div className="member-name">{name}</div>
				<div className="member-role">{role}</div>
			</div>
		</div>
	);
};

const SecondSection = () => {
	const boardMembers = [
		{ image: "/image 6.png", name: "فهد عبدالعزيز", role: "رئيس مجلس الإدارة" },
		{ image: "/image 6 (1).png", name: "ناصر أحمد", role: "رئيس مجلس الإدارة" },
		{ image: "/image 6.png", name: "فهد عبدالعزيز", role: "رئيس مجلس الإدارة" },
        { image: "/image 6 (1).png", name: "ناصر أحمد", role: "رئيس مجلس الإدارة" },

	];

	const executives = [
		{ image: "/image 6 (1).png", name: "ناصر أحمد", role: "رئيس مجلس الإدارة" },
		{ image: "/image 6.png", name: "فهد عبدالعزيز", role: "رئيس مجلس الإدارة" },
		{ image: "/image 6 (1).png", name: "فهد عبدالعزيز", role: "رئيس مجلس الإدارة" },
        { image: "/image 6.png", name: "فهد عبدالعزيز", role: "رئيس مجلس الإدارة" },

	];

	return (
		<section className="aboutus-second">
			<div className="aboutus-second__container" dir="rtl">
				<div className="group-block">
					<h3 className="group-title">أعضاء مجلس الإدارة</h3>
					<div className="cards-row">
						{boardMembers.map((m, idx) => (
							<MemberCard key={`b-${idx}`} imageSrc={m.image} name={m.name} role={m.role} />
						))}
					</div>
				</div>

				<div className="group-block">
					<h3 className="group-title">الإدارة العليا</h3>
					<div className="cards-row">
						{executives.map((m, idx) => (
							<MemberCard key={`e-${idx}`} imageSrc={m.image} name={m.name} role={m.role} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SecondSection;



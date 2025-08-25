import React from "react";
import MainHero from "../components/MainHero/MainHero";
import SectionOne from "../components/Customer Care/sectionOne/sectionOne";
import SectionTwo from "../components/Customer Care/SectionTwo/SectionTwo";
import Footer from "../components/Footer/Footer";

const CustomerCare = () => {
	return (
		<>
       
			<MainHero backgroundImageUrl={"../../Fuel website - images 2-16 1.png"} />
			<SectionOne />
			<SectionTwo />
            <Footer />
		</>
	);
};

export default CustomerCare;

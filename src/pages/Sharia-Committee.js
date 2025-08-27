import React from "react";
import MainHero from "../components/MainHero/MainHero";
import Footer from "../components/Footer/Footer";
import SectionOne from "../components/ShariaCommittee/SectionOne/SectionOne";

const ShariaCommittee = () => {
	return (
		<>
       
			<MainHero backgroundImageUrl={"../../Fuel website - images-07 1.png"} />
            <SectionOne />
            <Footer />
		</>
	);
};

export default ShariaCommittee;
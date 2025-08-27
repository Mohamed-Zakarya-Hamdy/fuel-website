import React from "react";
import MainHero from "../components/MainHero/MainHero";
import Footer from "../components/Footer/Footer";
import SectionOne from "../components/InvestorRelations/SectionOne/SectionOne";
import SectionTwo from "../components/InvestorRelations/SectionTwo/SectionTwo";


const InvestorRelations = () => {
	return (
		<>
       
       <MainHero backgroundImageUrl={"../../Fuel website - images 2-08 1.png"} />
       <SectionOne />
        <SectionTwo />
            <Footer />
		</>
	);
};

export default InvestorRelations ;
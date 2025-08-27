import React from "react";
import MainHero from "../components/MainHero/MainHero";
import Footer from "../components/Footer/Footer";
import SectionOne from "../components/ConsumerFinance/SectionOne/SectionOne";
import SectionTwo from "../components/ConsumerFinance/SectionOne/SectionTwo/SectionTwo";
const ConsumerFinance = () => {
	return (
		<>
       
       <MainHero backgroundImageUrl={"../../Fuel website - images-06 1.png"} />
         <SectionOne />
         <SectionTwo />
            <Footer />
		</>
	);
};

export default ConsumerFinance ;
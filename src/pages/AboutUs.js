import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/Navbar2/Navbar2";
import SectionOne from "../components/AboutUs/SectionOne/SectionOne";
import SecondSection from "../components/AboutUs/SecondSection/SecondSection";
import SectionThree from "../components/AboutUs/SectionThree/SectionThree";

const AboutUs = () => {
	return (
		<>
       <Navbar2 />
      <SectionOne />
      <SecondSection />
      <SectionThree />
            <Footer />
		</>
	);
};

export default AboutUs ;
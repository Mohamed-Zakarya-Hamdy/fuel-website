import React from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HomeSections/Hero-Section/Hero";
import HomeSectionone from "../components/HomeSections/HomeSectionone/HomeSectionone";
import HomeSectionTwo from "../components/HomeSections/HomeSectionTwo/HomeSectionTwo";
import HomeSectionThree from "../components/HomeSections/HomeSectionThree/HomeSectionThree";
import HomeSectionFour from "../components/HomeSections/HomeSectionFour/HomeSectionFour";

function Home() {
  return (
    <>
    <HeroSection />
    <HomeSectionone />
    <HomeSectionTwo />
    <HomeSectionThree />
    <HomeSectionFour />
      <Footer />
    </>
  );
}

export default Home;

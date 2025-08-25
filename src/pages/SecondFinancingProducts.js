import React from "react";
import Hero from "../components/Second Financing products/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/Navbar2/Navbar2";
import Conditions from "../components/Conditions/Conditions";
import Calculating from "../components/Calculating/Calculating";
import Features2 from "../components/Second Financing products/Features2/Features2";

function SecondFinancingProducts() {
  return (
    <>
    <Navbar2 />
      <Hero />
      <Features2 />
      <Conditions />
      <Calculating />
      <Footer />
    </>
  );
}

export default SecondFinancingProducts;



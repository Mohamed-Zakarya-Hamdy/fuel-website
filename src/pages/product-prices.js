import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/Navbar2/Navbar2";
import Sectionone from "../components/ProductPrices/SectionOne/Sectionone";
import SectionTwo from "../components/ProductPrices/SectionTwo/SectionTwo";
import SectionThree from "../components/ProductPrices/SectionThree/SectionThree";


const ProductPrices = () => {
	return (
		<>
       <Navbar2 />
   <Sectionone />
   <SectionTwo />
   <div style={{height:'1px', background:'#76777A', width:'100%', maxWidth:'1452px', margin:'40px auto'}} />
   <SectionThree />

           <Footer />
		</>
	);
};

export default ProductPrices ;
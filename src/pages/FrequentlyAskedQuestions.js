import React from 'react';
import Sectionone from '../components/Frequently Asked Questions/Sectionone/Sectionone';
import SecondSection from '../components/Frequently Asked Questions/SecondSection/SecondSection';
import Navbar2 from '../components/Navbar2/Navbar2';
import Footer from '../components/Footer/Footer';
const FrequentlyAskedQuestions = () => {
  return (
    <>
         <Navbar2 />
         <h1
  style={{
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "39px",
    lineHeight: "120%",
    letterSpacing: "0",
    color: "#2F8359",
    marginTop: "50px",
    textAlign: "right",
    padding:"20px"
  }}
>
  الأسئلة الشائعة
</h1>

      <Sectionone />
      <SecondSection />
      <Footer />
    </>
  );
};

export default FrequentlyAskedQuestions;

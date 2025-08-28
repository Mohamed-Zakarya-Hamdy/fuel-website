import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar1/Navbar1";
import FinancingProducts from "./pages/FinancingProducts";
import SecondFinancingProducts from "./pages/SecondFinancingProducts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions";
import CustomerCare from "./pages/Customer-care";
import ShariaCommittee from "./pages/Sharia-Committee";
import ConsumerFinance from "./pages/Consumer-finance";
import InvestorRelations from "./pages/Investor-Relations";
import AboutUs from "./pages/AboutUs";
import ProductPrices from "./pages/product-prices";
import FinancingCalculator from "./pages/Financing-Calculator";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        <Route path="/financing-products" element={<FinancingProducts />} />
        <Route path="/second-financing-products" element={<SecondFinancingProducts />} />
        <Route path="/faq" element={<FrequentlyAskedQuestions />} />
        <Route path="/customer-care" element={<CustomerCare />} />
        <Route path="/sharia-committee" element={<ShariaCommittee />} />
        <Route path="/Consumer-finance" element={<ConsumerFinance />} />
        <Route path="/Investor-Relations" element={<InvestorRelations />} />
        <Route path="/Product-Prices" element={<ProductPrices />} />
        <Route path="/Financing-Calculator" element={<FinancingCalculator />} />

      </Routes>
    </Router>
  );
}

export default App;

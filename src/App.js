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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/financing-products" element={<FinancingProducts />} />
        <Route path="/second-financing-products" element={<SecondFinancingProducts />} />
        <Route path="/faq" element={<FrequentlyAskedQuestions />} />
        <Route path="/customer-care" element={<CustomerCare />} />
      </Routes>
    </Router>
  );
}

export default App;

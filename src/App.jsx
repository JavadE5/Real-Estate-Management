import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyerLogin from "./components/BuyerLogin";
import BuyerSignup from "./components/BuyerSignup";
import SellerLogin from "./components/SellerLogin";
import SellerSignup from "./components/SellerSignup";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";
import LandingPage from "./components/Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buyer-login" element={<BuyerLogin />} />
        <Route path="/buyer-signup" element={<BuyerSignup />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller-signup" element={<SellerSignup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
      </Routes>
    </Router>
  );
}

export default App;

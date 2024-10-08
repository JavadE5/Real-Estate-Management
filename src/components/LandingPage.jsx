import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(""); // 'login' or 'signup'
  const navigate = useNavigate();

  const handleAction = (actionType) => {
    setAction(actionType);
    setShowModal(true);
  };

  const handleUserTypeSelection = (userType) => {
    setShowModal(false);
    navigate(`/${userType}-${action}`);
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>HOUSING HUB</h1>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <button onClick={() => handleAction("login")}>Login</button>
              </li>
              <li>
                <button onClick={() => handleAction("signup")}>Sign Up</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Select User Type</h2>
            <button onClick={() => handleUserTypeSelection("buyer")}>
              Buyer
            </button>
            <button onClick={() => handleUserTypeSelection("seller")}>
              Seller
            </button>
            <button onClick={() => handleUserTypeSelection("admin")}>
              Admin
            </button>
          </div>
        </div>
      )}
      <main className="main-section">
        <div className="overlay"></div>
      </main>
    </div>
  );
};

export default LandingPage;

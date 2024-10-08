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

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>HOUSING HUB</h1>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <button
                  className="login-btn"
                  onClick={() => handleAction("login")}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="signup-btn"
                  onClick={() => handleAction("signup")}
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="hero">
        <h1>Discover Your Perfect Home Today</h1>
        <p>
          At Create Real Estate Management, we connect buyers and sellers to
          make your dream home a reality. Explore our listings and find the
          ideal property that fits your lifestyle.
        </p>
      </div>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <h2>Select User Type</h2>
            <p>Please choose your user type to proceed:</p>
            <button
              className="type"
              onClick={() => handleUserTypeSelection("buyer")}
            >
              Buyer
            </button>
            <button
              className="type"
              onClick={() => handleUserTypeSelection("seller")}
            >
              Seller
            </button>
            <button
              className="type"
              onClick={() => handleUserTypeSelection("admin")}
            >
              Admin
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SellerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/seller/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Seller Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="auth-button">
          Log In
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/seller-signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default SellerLogin;

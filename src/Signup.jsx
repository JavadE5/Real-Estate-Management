import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/auth/signup", {
        email,
        password,
      });
      setSuccess(true);
      setError("");
    } catch (err) {
      setError("Error creating account. Email might already be registered.");
      setSuccess(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/"); // Navigate to login page
  };

  return (
    <div className="auth-container">
      <h1 className="title">HomeHub</h1> {/* Brand Name */}
      <p>Welcome to HomeHub! Sign up to manage your real estate needs.</p>{" "}
      {/* Welcome Message */}
      <form onSubmit={handleSignup} className="auth-form">
        <h2>Sign Up</h2>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && (
          <div className="success-message">
            <p>Account created successfully!</p>
            <p>
              Already have an account?{" "}
              <span
                onClick={handleLoginRedirect}
                style={{ cursor: "pointer", color: "#a78bfa" }}
              >
                Login
              </span>
            </p>
          </div>
        )}
        {!success && <button type="submit">Sign Up</button>}
      </form>
    </div>
  );
};

export default Signup;

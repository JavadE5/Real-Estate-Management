import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup"); // Navigate to signup page
  };

  return (
    <div className="auth-container">
      <h1 className="title">HomeHub</h1> {/* Brand Name */}
      <p className="Subtitle">
        {" "}
        Welcome to HomeHub! Please log in to continue.
      </p>{" "}
      {/* Welcome Message */}
      <form onSubmit={handleLogin} className="auth-form">
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Log In</button>
        <div className="forgot">
          <p>
            Don't have an account?{" "}
            <span
              onClick={handleSignupRedirect}
              style={{ cursor: "pointer", color: "#a78bfa" }}
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

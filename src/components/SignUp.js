import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import NavigationBar from "./Navbar/Navbar";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // firstName, lastName, email, password, confirmPassword

  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (name.length === 0) {
      newErrors.name = "Name is required";
    }

    if (!email.includes("@")) {
      newErrors.email = "Enter a valid email address";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(` Account created for ${name}`);
      navigate("/home");
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="container mycontainer">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>

        <form onSubmit={handleSubmit} className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}

          <div className="input">
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="input">
            <input
              type="password"
              placeholder="Password (min 6 chars)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <div className="input">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button type="submit" className="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

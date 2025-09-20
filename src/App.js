import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/About";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./components/Signin/Signin";
import Signup from "./components/SignUp/SignUp";

function App() {
  const isUserLoggedIn = localStorage.getItem("user");
  const homeRoute = window.location.pathname === "/home";
  // If user not in local storage and home route
  if (!isUserLoggedIn && homeRoute) {
    window.location.href = "/";
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

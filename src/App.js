import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignUp from './components/Loginsignin';
import SignupForm from './components/SignUp';

function App() {
  return (

    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignUp/>}/>
         <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<LoginSignUp />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

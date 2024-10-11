import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './landing page/Navbar';
import Homepage from './landing page/home/Homepage';
import Signup from './landing page/signup/Signup'
import Aboutpage from './landing page/about/Aboutpage'
import Pricingpage from './landing page/pricing/Pricingpage'
import Supportpage from './landing page/support/Supportpage'
import Productpage from './landing page/products/Productpage';
import Footer from './landing page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Navbar />

    <Routes>

      <Route path='/' element={<Homepage />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/about' element={<Aboutpage />}></Route>
      <Route path='/product' element={<Productpage />}></Route>
      <Route path='/pricing' element={<Pricingpage />}></Route>
      <Route path='/support' element={<Supportpage />}></Route>


    </Routes>
    <Footer />
  </BrowserRouter>
);



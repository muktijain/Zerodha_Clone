import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import Signup from './landingPage/signup/signup';
import Login from './landingPage/Login';
import AboutPage from './landingPage/about/AboutPage';
import ProductPage from './landingPage/product/ProductPage';
import PricingPage from './landingPage/pricing/PricingPage';
import SupportPage from './landingPage/support/SupportPage';
import NotFound from './landingPage/NotFound';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import Holdings from '../../dashboard/src/components/Holdings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Navbar />
<ToastContainer
  position="right-top"
  autoClose={3000}
  theme="light"
/>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/holdings' element={<Holdings />} /> */}
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer />

</BrowserRouter> 
);
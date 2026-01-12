import React from 'react';
import logo from './logo.svg';
import './App.css';
//React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//UsedRoutesCompoents
import Home from './components/HomeComponent/HomeComponent';
import About from './components/AboutComponent/AboutComponent';
import Contact from './components/ContactComponent/ContactComponent';
//animation transactions between screens
import { AnimatePresence } from 'framer-motion';
import Navbar from './layouts/Navbar/navbar.component';
import Footer from './layouts/Footer/footer.component';
import cv from "./data/cv.json";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;

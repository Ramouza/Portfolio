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

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;

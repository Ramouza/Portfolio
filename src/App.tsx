import React from 'react';
import logo from './logo.svg';
import './App.css';
//React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//UsedRoutesCompoents
import Home from './components/HomeComponent/HomeComponent';
import About from './components/AboutComponent/AboutComponent';
import Contact from './components/ContactComponent/ContactComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

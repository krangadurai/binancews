// src/App.js
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import CryptoData from './component/CryptoTracker';
import Home from './component/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:symbol" element={<CryptoData />} />
    </Routes>
  </BrowserRouter>

  );
};

export default App;

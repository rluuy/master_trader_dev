import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import LandingPage from './landing_page.js';
import Navbar from './persistents.js';
import ID from './id.js';
import About from './about.js';
import { StockPage } from './stock_page.js';


function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/stock" element={<StockPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate} from "react-router-dom";
import './App.css';
import LandingPage from './landing_page.js';
import Navbar from './persistents.js';
import ID from './id.js';
import About from './about.js';
import { StockPage } from './stock_page.js';


function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname == "/stock") {
      navigate("/");
    }
  }, []);

  return (
    <div className="App overflow-hidden">
        <Navbar />
    </div>
  );
}

export default App;
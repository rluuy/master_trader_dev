import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import LandingPage from './landing_page.js';
import About from './about.js';
import { StockPage } from './stock_page.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <BrowserRouter>
    <App />
     <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/stock" element={<StockPage/>}/>
      </Routes>
  </BrowserRouter>
</StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

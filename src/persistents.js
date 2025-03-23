import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 top-0 w-full from-[#16162F] bg-gradient-to-b shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Logo */}
            <div className="flex-col vertical-align items-center py-4">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight mb-0">Mastertrader</h1>
                <div className="w-16 h-0.5 justify-center bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-80"></div>
            </div>
            
            {/* Primary Navbar items - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-white font-light hover:text-blue-500 transition duration-300">Home</Link>
              <Link to="/about" className="py-4 px-2 text-white font-light hover:text-blue-500 transition duration-300">About</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              <svg 
                className="w-6 h-6 text-gray-300 hover:text-white" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col items-start py-2 px-4 space-y-2">
          <Link to="/" className="py-4 px-2 text-white border-b-2 border-blue-500 font-light">Home</Link>
          <Link to="/about" className="py-4 px-2 text-white font-light hover:text-white hover:border-blue-500 transition duration-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
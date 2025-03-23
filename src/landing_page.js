import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companionslist } from './companions';
import ID from './id';

function buttonHandler(companionID){
  ID.setValue(companionID)
}

const LandingPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-white/[0.02]"></div>
      <div className="absolute -left-20 top-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -right-20 top-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute left-20 bottom-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Glass container for main content */}
      <div className={`bg-black bg-opacity-40 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 mb-16 text-center max-w-3xl w-full shadow-2xl transition-all duration-1000 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
  <div className="flex flex-col items-center justify-center relative mb-6">
    <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight mb-0">Mastertrader</h1>
    <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-80"></div>
    <img src="logo512.png" className="w-1/4 h-fit object-center mt-4"></img>
  </div>

  <h2 className="text-2xl text-gray-300 font-light mt-8">Choose your AI trading companion below</h2>
</div>

      {/* Companions row with staggered entrance animations */}
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl w-full">
        {companionslist.map((companion, index) => (
          <div 
            key={companion.id} 
            className={`flex flex-col items-center transition-all duration-700 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${300 + index * 150}ms` }}
          >
            {/* Circle container with glow effect */}
            <div className={`group w-28 h-28 rounded-full bg-gradient-to-br ${companion.color} flex items-center justify-center mb-4 cursor-pointer shadow-lg relative transition-all duration-500 hover:scale-110 hover:shadow-lg`}>
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${companion.color} blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
              
              {/* Inner content */}
              <Link to="/stock" onClick={() => buttonHandler(companion.id)} className="absolute inset-0.5 rounded-full bg-gray-900 flex items-center justify-center bg-clip-content">
                <img className="object-fill bg-clip-content rounded-full" src={companion.icon}></img>
              </Link>
            </div>
            
            {/* Companion name with hover effect */}
            <span className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors duration-300">{companion.name}</span>
          </div>
        ))}
      </div>
      
      {/* Subtle footer element */}
      <div className={`fixed bottom-6 text-gray-600 text-sm transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-10'}`}>
        Team #50 Tucson Potholes
      </div>
    </div>
  );
};

export default LandingPage;
import React, { useState, useEffect } from 'react';
import AnimatedLoadingPieChart from './piechart';
import { companions } from './companions';
import id from './id';

export const StockPage = () => {
  const [loaded, setLoaded] = useState(false);
  const data = companions[id.getValue()]
  
  useEffect(() => {
    // Trigger entrance animations after component mounts
    setLoaded(true);
  }, []);

  return (
    <section className="bg-black min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="flex flex-row h-full pt-24">
        <div className="relative">
          {/* The pie chart */}
          <div className="relative z-0">
            <AnimatedLoadingPieChart />
          </div>
          {/* The chicken icon overlay - centered on the pie chart */}
          <div className="absolute inset-0 z-10 translate-x-1/3 translate-y-1/2">
            <img
              src="chicken_icon.png"
              alt="Chicken Icon"
              className="left-auto bottom-auto w-auto h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
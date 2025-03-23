import React, { useState, useEffect } from 'react';
import AnimatedLoadingPieChart from './piechart';

export const StockPage = () =>{
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Trigger entrance animations after component mounts
        setLoaded(true);
      }, []);

    return (
    <section className="bg-black min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="flex flex-row h-full py-20">
        <div className="h-full p-1">
          <AnimatedLoadingPieChart />
        </div>
      </div>

    </section>
    );
}
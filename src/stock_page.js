import React, { useState } from 'react';
import AnimatedLoadingPieChart from './piechart';
import { companions } from './companions';
import id from './id';

export const StockPage = () => {
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Retrieve companion id and corresponding data.
  const companionId = id.getValue();
  const companionData = companions[companionId];
  
  // Map companion ids to trader API strings.
  const traderMap = {
    1: 'PELOSI',
    3: 'FETTERMAN',
    2: 'MTG',
    5: 'CHICKEN',
    4: 'MARK_L_TOSI'
  };
  const traderParam = traderMap[companionId] || 'PELOSI';

  // Function to call the AWS API.
  const handlePredictStock = () => {
    setIsLoading(true);
    setPrediction(null);

    const apiUrl = `https://xxqsllsb7f.execute-api.us-west-2.amazonaws.com/prod/recommendations/${traderParam}`;
    console.log("Fetching prediction from:", apiUrl);

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPrediction(data);
        setIsLoading(false);
      })
      .catch(error => {
        setPrediction({ error: error.toString() });
        setIsLoading(false);
      });
  };

  // Extract the top recommendation from the fetched data.
  const topRec = prediction && prediction.topRecommendation;

  // Determine the confidence to display. For CHICKEN, override to 100%.
  const displayConfidence =
    traderParam === "CHICKEN" && topRec ? "100%" : topRec ? topRec.confidence : "";

  const displayTicker =
   traderParam === "CHICKEN" && topRec ? "NVDA" : topRec ? topRec.ticker : "";

   const displayQuip = 
  traderParam === "CHICKEN" && topRec ? topRec.quip.replace(topRec.ticker, "NVDA") : topRec ? topRec.quip : "";

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black min-h-screen relative overflow-hidden">
      {/* Pie chart and companion icon - now on the left side and full height */}
      <div className="absolute h-screen flex items-center pt-6">
        <div className="relative">
          <AnimatedLoadingPieChart />
          <div className="absolute inset-0 z-10 translate-x-1/3 translate-y-2/3">
            <img
              src={companionData.icon}
              alt="Icon"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Right side content - centered both horizontally and vertically */}
      <div className="flex flex-col items-center justify-center space-y-8 flex-1 h-screen">
        {/* Modern styled box for Companion's message and confidence */}
        <div className="w-full max-w-xl p-10 bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-2xl mx-auto">
          {isLoading ? (
            <p className="text-lg">Loading prediction...</p>
          ) : topRec ? (
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {companionData.name} says buy {displayTicker}!
              </h2>
              <p className="text-xl">
                <strong>Confidence:</strong> {displayConfidence}
              </p>
            </div>
          ) : (
            <p className="text-xl">Click the button to predict the stock.</p>
          )}
        </div>
        
        {/* Modern styled box for Quip - starts empty on entry */}
        <div className="w-full max-w-xl p-10 bg-white/5 backdrop-blur-lg text-white rounded-2xl shadow-2xl min-h-[150px] mx-auto">
          {topRec ? (
            <div>
              <p className="text-xl">{displayQuip}</p>
            </div>
          ) : null}
        </div>

        {/* Modern gradient button - centered */}
        <div className="flex justify-center w-full">
          <button 
            onClick={handlePredictStock}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-xl">
            Predict Stock
          </button>
        </div>
      </div>
    </section>
  );
};
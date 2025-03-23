import React from "react";

export const companions = {
1: { id: 1, ctid:"P000197", name: "🔥 Knowledgable Senator", color: "from-emerald-400 to-teal-500", icon: "pelosi_icon.png" },
2: { id: 2, ctid:"G000596", name: "Opinionated Tycoon", color: "from-violet-400 to-purple-600", icon: "green_icon.png" },
3: { id: 3, ctid:"F000479", name: "Chill Business Guy", color: "from-rose-400 to-red-600", icon: "fetterman_icon.png" },
4: { id: 4, ctid:"C001098", name: "Eller Undergraduate", color: "from-amber-400 to-orange-600", icon: "mark_icon.png"},
5: { id: 5, ctid:"C001098", name: "Chicken", color: "from-sky-400 to-blue-600", icon: "chicken_icon.png"},
};

export const companionslist = [
    { id: 1, ctid:"P000197", name: "🔥 Knowledgable Senator", color: "from-emerald-400 to-teal-500", icon: "pelosi_icon.png" },
    { id: 2, ctid:"G000596", name: "Opinionated Tycoon", color: "from-violet-400 to-purple-600", icon: "green_icon.png" },
    { id: 3, ctid:"F000479", name: "Chill Business Guy", color: "from-rose-400 to-red-600", icon: "fetterman_icon.png" },
    { id: 4, ctid:"C001098", name: "Eller Undergraduate", color: "from-amber-400 to-orange-600", icon: "mark_icon.png"},
    { id: 5, ctid:"C001098", name: "Chicken", color: "from-sky-400 to-blue-600", icon: "chicken_icon.png"},
];
    

export const companionPortfolios = {
    1: { // For companion ID 1
      stocks: [
        { name: "APPL", percentage: 25, color: "#A2AAAD" },
        { name: "AMZN", percentage: 10, color: "#FF9900" },
        { name: "MSFT", percentage: 14, color: "#0066DA" },
        { name: "NVDA", percentage: 10, color: "#76B900"},
        { name: "GOOGL", percentage: 11, color: "#4285F4" },
        { name: "AVGO", percentage: 10, color: "#CC092F" },
        { name: "PAN", percentage: 10, color: "#FA582D" }
      ]
    },
    2: { // For companion ID 2
      stocks: [
        { name: "NVDA", percentage: 27, color: "#76B900" },
        { name: "INTC", percentage: 12, color: "#0068B5" },
        { name: "ASML", percentage: 19, color: "#0F238C" },
        { name: "DVN", percentage: 6, color:"#F1471D" },
        { name: "META", percentage: 11, color: "#0081FB" },
        { name: "JNJ", percentage: 10, color: "#D71600" },
        { name: "UPS", percentage: 5, color: "#301506" },
        { name: "HD", percentage: 10, color:"#F96302" },
      ]
    },
    3: { // For companion ID 3
      stocks: [
        { name: "GE", percentage: 18, color: "#3B73B9" },
        { name: "ARCC", percentage: 14, color:"#40404F" },
        { name: "PARA", percentage: 13, color:"#000A3B" },
        { name: "GM", percentage: 12, color:"#005DAA" },
        { name: "BX", percentage: 11, color:"#222222" },
        { name: "SRE", percentage: 13, color:"#E40032" },
        { name: "BONDS", percentage: 24, color:"#869174" }
      ]
    },
    4: { // For companion ID 3
        stocks: [
          { name: "VTI", percentage:55, color:"#950730" },
          { name: "VOO", percentage:33, color:"#9A0718" }, 
          { name: "SCHG", percentage:12, color:"#009DDB" }, 
        ]
    },
    5: { // For companion ID 3
        stocks: [
          { name: "NVDA", percentage:100, color: "#76B900"},
        ]
      }
  };
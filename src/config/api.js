const API_CONFIG = {
    baseUrl: 'https://tqqltsb7l7.execute-api.us-west-2.amazonaws.com/prod',
    endpoints: {
      getTraderRecommendation: (traderId) => `/recommendations/${traderId}`
    }
  };
  
  export default API_CONFIG;
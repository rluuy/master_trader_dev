// src/services/apiService.js
import API_CONFIG from '../config/api';

export const getTraderRecommendation = async (traderId) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.getTraderRecommendation(traderId)}`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching trader recommendation:', error);
    throw error;
  }
};
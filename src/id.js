import React from "react";

let instance = null;

class ID {
  constructor() {
    // If an instance already exists, return it
    if (instance) {
      return instance;
    }
    
    // Initialize state
    this.value = 1;
    this.listeners = new Set();
    
    // Save the instance
    instance = this;
    return instance;
  }
  
  // Get the current value
  getValue() {
    return this.value;
  }
  
  // Set a new value and notify listeners
  setValue(newValue) {
    this.value = newValue;
    this.notifyListeners();
  }
  
  // Subscribe to changes
  subscribe(callback) {
    this.listeners.add(callback);
    
    // Return an unsubscribe function
    return () => {
      this.listeners.delete(callback);
    };
  }
  
  // Notify all listeners of a state change
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.value));
  }
  
  // Reset the singleton (useful for testing)
  static resetInstance() {
    instance = null;
  }
}

// Export a single instance
export default new ID();

// Example React hook to use the singleton
export const useCounter = () => {
  const [count, setCount] = React.useState(instance.getValue());
  
  React.useEffect(() => {
    // Subscribe to changes
    const unsubscribe = instance.subscribe(setCount);
    
    // Unsubscribe when the component unmounts
    return unsubscribe;
  }, []);
  
  return {
    count,
    setValue: (value) => instance.setValue(value)
  };
};
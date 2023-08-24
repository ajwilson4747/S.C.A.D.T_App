// SharedState.js
import React, { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
    const [sharedValue, setSharedValue] = useState('');

  return (
    <SharedStateProvider value={{sharedValue, setSharedValue}}>
      {children}
    </SharedStateProvider>
  );
};

export const useSharedState = () => {
  return useContext(SharedStateContext);
};

import { createContext, useContext } from 'react';
import { usePOSData } from '../hooks/usePOSData';

const POSDataContext = createContext(null);

export function POSDataProvider({ children }) {
  const value = usePOSData();
  return <POSDataContext.Provider value={value}>{children}</POSDataContext.Provider>;
}

export function usePOSContext() {
  const context = useContext(POSDataContext);
  if (!context) {
    throw new Error('usePOSContext must be used within a POSDataProvider');
  }
  return context;
}

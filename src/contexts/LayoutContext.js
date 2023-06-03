import React, { createContext, useState } from 'react';

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState("small");

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
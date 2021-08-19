import React, { createContext, useState } from "react";

export const IdContext = createContext();

// This context provider is passed to any component requiring the context
export const IdProvider = ({ children }) => {
  const [id, setId] = useState("");


  return (
    <IdContext.Provider
      value={{
        id,
        setId
      }}
    >
      {children}
    </IdContext.Provider>
  );
};
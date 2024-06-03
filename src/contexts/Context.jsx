import React, { createContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState({});

  const saveServiceData = (data, route) => {
    setSelectedService({ ...data, route });
  };

  return (
    <Context.Provider value={{ selectedService, saveServiceData }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

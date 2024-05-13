"use client";
import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addItem = (item) => {
    setBasket([...basket, item]);
  };

  const values = {
    basket,
    setBasket,
    addItem,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);

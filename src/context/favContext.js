"use client";
import { createContext, useContext, useState } from "react";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addFav = (item) => {
    setFav([...fav, item]);
  };

  const removeFav = (id) => {
    setFav(fav.filter((item) => item.id !== id));
  };

  const favvalues = {
    fav,
    setFav,
    addFav,
    removeFav,
  };
  return (
    <FavContext.Provider value={favvalues}>{children}</FavContext.Provider>
  );
};

export const useFav = () => useContext(FavContext);

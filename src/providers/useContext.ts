import { createContext, useContext } from "react";
import { AppContextProps } from "../@types/context";

export const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

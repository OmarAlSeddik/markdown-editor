import { createContext, useContext, useState } from "react";

type ContextType = { navActive: boolean; toggleNav: () => void };

const defaultState = {
  navActive: false,
  toggleNav: function () {
    return;
  },
};

const AppContext = createContext<ContextType>(defaultState);

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

export const AppContextProvider = ({ children }: PropsType) => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ navActive, toggleNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

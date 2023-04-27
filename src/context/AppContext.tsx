import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  isMobile: boolean;
  navActive: boolean;
  toggleNav: () => void;
  toggleTheme: () => void;
};

const defaultState = {
  isMobile: false,
  navActive: false,
  toggleNav: function () {
    return;
  },
  toggleTheme: function () {
    return;
  },
};

const AppContext = createContext<ContextType>(defaultState);

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

export const AppContextProvider = ({ children }: PropsType) => {
  const [navActive, setNavActive] = useState(false);
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>();
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  useEffect(() => {
    if (darkTheme === undefined)
      "theme" in localStorage
        ? setDarkTheme(localStorage.theme === "dark")
        : setDarkTheme(
            window.matchMedia("(prefers-color-scheme: dark)").matches
          );
    else {
      if (darkTheme) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
    }
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{ isMobile, toggleTheme, navActive, toggleNav }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

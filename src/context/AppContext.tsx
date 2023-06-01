import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  isMobile: boolean;
  navActive: boolean;
  previewActive: boolean;
  darkTheme: boolean | undefined;
  documentContent: string;
  changeDocumentContent: (newContent: string) => void;
  toggleNav: () => void;
  togglePreview: () => void;
  toggleTheme: () => void;
};

const defaultState = {
  isMobile: false,
  navActive: false,
  previewActive: false,
  darkTheme: false,
  documentContent: "",
  changeDocumentContent: function () {
    return;
  },
  toggleNav: function () {
    return;
  },
  togglePreview: function () {
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
  const [documentContent, setDocumentContent] = useState("");
  const [navActive, setNavActive] = useState(false);
  const [previewActive, setPreviewActive] = useState(false);
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>();
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;

  const changeDocumentContent = (newContent: string) => {
    setDocumentContent(newContent);
  };

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  const togglePreview = () => {
    setPreviewActive((prev) => !prev);
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
      value={{
        documentContent,
        changeDocumentContent,
        isMobile,
        darkTheme,
        toggleTheme,
        navActive,
        toggleNav,
        previewActive,
        togglePreview,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

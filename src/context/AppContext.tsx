import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  isMobile: boolean;
  navActive: boolean;
  previewActive: boolean;
  darkTheme: boolean | undefined;
  documentName: string;
  documentContent: string;
  saved: boolean;
  changeDocumentName: (newName: string | undefined) => void;
  changeDocumentContent: (newContent: string | undefined) => void;
  toggleNav: () => void;
  togglePreview: () => void;
  toggleTheme: () => void;
  toggleSaved: (state: boolean) => void;
};

const defaultState = {
  isMobile: false,
  navActive: false,
  previewActive: false,
  darkTheme: false,
  saved: false,
  documentName: "",
  documentContent: "",
  changeDocumentName: function () {
    return;
  },
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
  toggleSaved: function () {
    return;
  },
};

const AppContext = createContext<ContextType>(defaultState);

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

export const AppContextProvider = ({ children }: PropsType) => {
  const [saved, setSaved] = useState(false);
  const [documentName, setDocumentName] = useState("");
  const [documentContent, setDocumentContent] = useState("");
  const [navActive, setNavActive] = useState(false);
  const [previewActive, setPreviewActive] = useState(false);
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>();
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;

  const toggleSaved = (state: boolean) => {
    setSaved(state);
  };

  const changeDocumentName = (newName: string | undefined) => {
    if (newName) setDocumentName(newName);
  };

  const changeDocumentContent = (newContent: string | undefined) => {
    if (newContent) setDocumentContent(newContent);
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
        saved,
        toggleSaved,
        documentName,
        changeDocumentName,
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

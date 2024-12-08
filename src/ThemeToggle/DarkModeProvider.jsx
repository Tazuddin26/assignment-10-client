import { createContext, useState } from "react";

export const DarkModeContext = createContext();
const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark");
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

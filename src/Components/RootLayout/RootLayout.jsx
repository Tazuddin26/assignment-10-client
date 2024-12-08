import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { DarkModeContext } from "../../ThemeToggle/DarkModeProvider";

const RootLayout = () => {
  const { theme } = useContext(DarkModeContext);
  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-white" : "bg-slate-900"
      }`}
    >
      <h1>{theme === "light" ? "" : ""}</h1>

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

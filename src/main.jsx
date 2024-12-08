import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";
import router from "./Components/Router/Router.jsx";
import DarkModeProvider from "./ThemeToggle/DarkModeProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <DarkModeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </DarkModeProvider>
  </StrictMode>
);

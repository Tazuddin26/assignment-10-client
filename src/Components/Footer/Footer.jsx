import React, { useContext } from "react";
import { DarkModeContext } from "../../ThemeToggle/DarkModeProvider";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  const { theme } = useContext(DarkModeContext);
  return (
    <footer
      className={` ${
        theme === "light"
          ? " footer footer-center text-black bg-slate-700"
          : "bg-blue-950 footer footer-center text-primary-content"
      }`}
    >
      <h1>{theme === "light" ? "" : ""}</h1>
      <aside>
        <img
          src="https://i.ibb.co.com/0XC9wd6/logo.jpg"
          alt="logo"
          className="w-20 p-2 rounded-full border-4 border-b-indigo-600"
        />
        <div className=" space-y-2">
          <p className="font-bold text-3xl">THE GAMER</p>

          <br />
          <p className="font-bold">
            Damn, you got this far? You're savage! Well,
            <br /> you can then subscribe to our social media profiles and enjoy
            team insights!
          </p>
        </div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <BsTwitterX size={30} />
          </a>
          <a>
            <IoLogoYoutube size={30} />
          </a>
          <a>
            <FaFacebook size={30} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

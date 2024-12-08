import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";
import { AuthContext } from "../../Provider/AuthProvider";
import { DarkModeContext } from "../../ThemeToggle/DarkModeProvider";
import { Tooltip } from "react-tooltip";
import { PiUserCircleLight } from "react-icons/pi";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(DarkModeContext);
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        console.log("user signout successfully");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const menuLink = (
    <>
      <></>
      {user && (
        <>
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/addReview"
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              Add Review
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/allReview"
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              All Reviews
            </NavLink>
          </li>
          <li className=" ">
            <NavLink
              to={`/myReviews/${user.email}`}
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              MyReviews
            </NavLink>
          </li>
          <li className=" ">
            <NavLink
              to={`/watchList/${user.email}`}
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              WatchList
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={` ${
        theme === "light"
          ? " navbar bg-slate-700 text-white max-w-7xl mx-auto"
          : "bg-blue-950 navbar text-white max-w-7xl mx-auto"
      }`}
    >
      <h1>{theme === "light" ? "" : ""}</h1>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-600 rounded-box z-[10] mt-3 w-52 p-2 shadow-xl"
          >
            <div className="flex items-center gap-2 ml-3 my-2 rounded-xl">
              {user?.email ? (
                <>
                  <span className="flex items-center gap-2 rounded-xl ">
                    <img
                      src={user.photoURL}
                      className="w-10 rounded-full object-cover"
                      alt=""
                    />
                    <p className=" menu-horizontal  text-base font-bold ">
                      {user.displayName}
                    </p>
                  </span>
                </>
              ) : (
                <>
                  <span>
                    <PiUserCircleLight size={44} className="font-extraLight bg-white rounded-full" />
                  </span>
                </>
              )}
            </div>
            <hr />
            {menuLink}
          </ul>
        </div>
        <NavLink to="/" className="flex items-center">
          <img
            src="https://i.ibb.co.com/0XC9wd6/logo.jpg"
            alt="logo"
            className="w-12 p-2 rounded-full border-4 border-b-indigo-600"
          />
          <a className="btn btn-ghost text-xl">GAMER</a>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">{menuLink}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div className=" flex items-center gap-2">
          {user?.email ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="ring-primary ring-offset-base-100 ring ring-offset-2 w-10 rounded-full">
                  <a id="my-anchor-element-id">
                    <img src={user?.photoURL} alt="image" />
                  </a>
                </div>

                <Tooltip
                  anchorSelect="#my-anchor-element-id"
                  content={user.displayName}
                />
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-outline bg-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="hover:underline">
                <button>Login</button>
              </NavLink>
              <span className="ml-2 mr-2">/</span>
              <NavLink to="/register" className=" hover:underline">
                <button>Register</button>
              </NavLink>
            </>
          )}
          <button
            onClick={toggleTheme}
            className="btn btn-outline w-12 rounded-full bg-amber-200"
          >
            {theme === "light" ? <IoSunny size={30} /> : <IoMoon size={30} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

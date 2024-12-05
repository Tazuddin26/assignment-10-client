import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
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
      <li className=" ">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline text-amber-600" : ""}`
          }
        >
          My Reviews
        </NavLink>
      </li>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline text-amber-600" : ""}`
          }
        >
          Game WatchList
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={`/updateReview`}
          className={({ isActive }) =>
            `${isActive ? "underline text-amber-600" : ""}`
          }
        >
          Update Review
        </NavLink>
      </li>
      {user && (
        <>
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
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-sky-100 ">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">GEAMER</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuLink}</ul>
      </div>
      <div className="navbar-end">
        <div className=" flex items-center gap-2">
          <span className="">
            <p className="text-md">{user?.displayName}</p>
          </span>
          {user?.email ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="ring-primary ring-offset-base-100 ring ring-offset-2 w-10 rounded-full">
                  <img src={user?.photoURL} alt="image" />
                </div>
              </div>
              <button onClick={handleLogOut} className="btn btn-outline">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

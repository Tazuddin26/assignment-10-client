import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full h-[500px] flex justify-center">
        <span className="loading loading-spinner loading-lg text-center text-white"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>;
};

export default PrivateRoute;

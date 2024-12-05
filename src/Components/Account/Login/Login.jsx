import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginUser = { email, password };
    console.log(loginUser);
    signInUser(email, password)
      .then((res) => {
        console.log(res);
        navigate("/");
        navigate(location.state.from);
        alert("successfully Login");
      })
      .catch((error) => {
        console.log("error login", error.message);
      });
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle().then((res) => {
      navigate("/");
      // navigate(location.state.from);
    });
  };

  return (
    <div className="bg-sky-200  max-w-7xl mx-auto border mt-10">
      <div className="border py-5 bg-info text-center">
        <p className="text-2xl">User Mangement</p>
      </div>
      <div className=" flex my-10 justify-center ">
        <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <form onSubmit={handleLogIn} className="card-body">
            <h1 className="text-2xl font-bold text-center text-gray-600">
              Sign In now!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <p className="label-text-alt link link-hover">Forgot password?</p>
            </label>
            <div className="form-control mt-6 space-y-3">
              <button className="btn btn-info">Login</button>
              <button onClick={handleGoogleLogIn} className="btn btn-outline">
                Google
              </button>
            </div>
            <label className="label ">
              <p className="text-end">
                Don't have an account ?{" "}
                <Link to="/register" className="hover:underline">
                  <span>Register</span>
                </Link>
              </p>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

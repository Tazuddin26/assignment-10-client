import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Register = () => {
  const { createUser, profileManage } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password Length must be at least 6 character");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Must have a Lowercase letter in the password ");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Must have an Uppercase letter in the password ");
      return;
    }
    createUser(email, password)
      .then((res) => {
        const createdAt = res?.user?.metadata?.creationTime;
        const signupUser = { name, email, image, createdAt };

        fetch("https://assignment-10-server-beta-steel.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signupUser),
        })
          .then((res) => res.json())
          .then((data) => data);
        toast.success("Successfully Registration !", {
          position: "top-center",
          autoClose: 3000,
        });
        profileManage(name, image);
        navigate("/");
      })
      .catch((error) => error.message);
  };

  return (
    <div className=" min-h-screen max-w-7xl mx-auto ">
      {/* <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-gray-600">Registration now!</h1>
      </div> */}
      <div className=" flex my-4 justify-center ">
        <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-6">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-2xl font-bold text-center text-gray-600">
              Sign Up now!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">PhotoURl</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Photo URL"
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
            <div className="form-control mt-6">
              <button className="btn btn-outline bg-blue-950 text-white">
                Register
              </button>
            </div>
            <p className="mx-auto text-red-600 text-sm">{error}</p>
            <label className="label ">
              <p className="text-end">
                Have an account ?{" "}
                <Link to="/login" className="hover:underline">
                  <span>Login</span>
                </Link>
              </p>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

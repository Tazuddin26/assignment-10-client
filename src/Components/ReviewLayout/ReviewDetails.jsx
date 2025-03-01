import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ReviewDetails = () => {
  const loadedDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, name, email, image, title, description, rating, year, genres } =
    loadedDetails;
  const watchList = {
    name,
    email,
    image,
    title,
    description,
    rating,
    year,
    genres,
  };

  const handleWatchList = () => {
    if (!user) {
      alert("Please log in to add to WatchList");
      return;
    }
    fetch(`https://assignment-10-server-beta-steel.vercel.app/watchList`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-user-email": user?.email,
      },
      body: JSON.stringify({ email: user?.email, watchList }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add to WatchList");
        }
        return res.json();
      })
      .then((data) => {
        console.log("watchList added", data);
      });
  };

  return (
    <div className=" bg-slate-800 shadow-xl  mt-10 max-w-5xl mx-auto mb-10 rounded-2xl">
      <div className="lg:flex border rounded-xl lg:mx-0 mx-3">
        <figure className=" px-4 py-4 lg:space-y-4 lg:w-4/12 w-full ">
          <img src={image} alt="Movie" className="ml-14 lg:ml-0 rounded-lg" />
          <p className="text-3xl text-center text-white lg:text-start ">
            {title}
          </p>
        </figure>
        <div className="card-body lg:w-6/12">
          <div>
            <h2 className="card-title text-white">{title}</h2>
          </div>
          <div className="card bg-base-100 w-full shadow-xl border">
            <div className="card-body bg-slate-700 rounded-2xl">
              <h2 className="card-title text-white">{name}</h2>
              <div className="flex gap-1">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-xl text-white"> {rating}</p>
              </div>
              <p className="text-white">{email}</p>
              <p className="text-white">{description}</p>
              <p className="text-white">{genres}</p>
            </div>
          </div>
          <div className="card-actions justify-end ">
            <button
              onClick={handleWatchList}
              className="btn btn-outline bg-white "
            >
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewDetails;

import { useState, useEffect } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import WatchReviewList from "./WatchReviewList";
import { AuthContext } from "../../../Provider/AuthProvider";
import { DarkModeContext } from "../../../ThemeToggle/DarkModeProvider";

const WatchReviewData = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(DarkModeContext);
  // const loadedReviews = useLoaderData();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-10-server-beta-steel.vercel.app/watchList/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching watch list:", err));
  }, [user?.email]);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 mb-10 min-h-screen ">
      <p
        className={`text-3xl font-bold justify-center items-center ${
          theme === "light"
            ? " navbar bg-white text-black "
            : "bg-slate-900 navbar text-white "
        }`}
      >
        MY Watch List
      </p>
      <h1>{theme === "light" ? "" : ""}</h1>
      <div className="max-w-4xl mx-auto px-5 py-5 gap-4 space-y-4 ">
        <div
          className={`space-x-4 space-y-4${
            theme === "light"
              ? "  bg-white text-black "
              : "bg-blue-950  text-white "
          }`}
        >
          <h1>{theme === "light" ? "" : ""}</h1>
          <h1>{theme === "light" ? "" : ""}</h1>
          {reviews?.length === 0
            ? "There is no data in Database Pocket"
            : reviews?.map((review) => (
                <WatchReviewList
                  key={review._id}
                  review={review}
                  reviews={reviews}
                  setReviews={setReviews}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default WatchReviewData;

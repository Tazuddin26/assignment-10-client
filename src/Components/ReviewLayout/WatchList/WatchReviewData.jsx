import { useState, useEffect } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import WatchReviewList from "./WatchReviewList";
import { AuthContext } from "../../../Provider/AuthProvider";

const WatchReviewData = () => {
  const { user } = useContext(AuthContext);
  // const loadedReviews = useLoaderData();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/watchList/${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching watch list:", err));
  }, [user.email]);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10">
      <p>Review:{reviews.length}</p>
      <div className="lg:flex  border px-5 py-5 gap-4 space-y-4 ">
        <div className="lg:w-4/12 border">fsdfs</div>
        <div className="space-y-4 lg:w-8/12">
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

import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import ReviewDetails from "./ReviewDetails";

const AllReview = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-3xl text-sky-600">AllReviews: {reviews.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 gap-4">
        {reviews.length < 0
          ? "There is No Data in My Server Pocket"
          : reviews.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                reviews={reviews}
                setReviews={setReviews}
              />
            ))}
      </div>
    </div>
  );
};

export default AllReview;

import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";

const AllReview = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);
  const [reviewData, setReviewData] = useState([]);
  const [sortType, setSortType] = useState();

  console.log(reviewData);
  useEffect(() => {
    // if (!sortType) return;
    const sortArray = (type) => {
      const types = {
        Action: "action",
        RPG: "RPG",
        Adventure: "Adventure",
      };
      const sortProperty = types[type];
      const sorted = [...reviews].sort((a, b) => {
        if (type === "rating") {
          return b.rating - a.rating;
        } else if (type === "year") {
          return b.year - a.year;
        }
        return 0;
        // b[sortProperty] - a[sortProperty];
      });
      setReviewData(sorted);
    };
    sortArray(sortType);
  }, [sortType, reviews]);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <p className="text-3xl ml-5 ">All Game Collection</p>
      <div className="ml-6 mt-6">
        <select
          onChange={(e) => setSortType(e.target.value)}
          name="genres"
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Choose Your Sorted Name!
          </option>
          <option value="rating">Sort by Rating</option>
          <option value="year">Sort by Year</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 gap-4">
        {reviewData.length === 0
          ? "There is No Data in My Server Pocket"
          : reviewData.map((review) => (
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

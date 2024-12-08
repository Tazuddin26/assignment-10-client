import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useContext, useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";
import { DarkModeContext } from "../../ThemeToggle/DarkModeProvider";

const AllReview = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);
  const [reviewFilterData, setReviewFilterData] = useState(loadedReviews);
  const [sortType, setSortType] = useState();
  const [selectedType, setSelectedType] = useState();
  const { theme } = useContext(DarkModeContext);

  useEffect(() => {
    let reviewsData = [...reviews];
    if (selectedType && selectedType !== "All") {
      reviewsData = reviewsData.filter(
        (filterReview) => filterReview.genres === selectedType
      );
    }
    if (sortType === "rating") {
      reviewsData.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "year") {
      reviewsData.sort((a, b) => b.year - a.year);
    }
    setReviewFilterData(reviewsData);
  }, [sortType, reviews, selectedType]);

  return (
    <div className="max-w-7xl mx-auto mt-10 min-h-screen mb-10">
      <div
        className={`${
          theme === "light"
            ? "bg-white text-black"
            : "bg-slate-900 text-primary-content  "
        }`}
      >
        <h1>{theme === "light" ? "" : ""}</h1>
        <p className="text-3xl ml-5 ">All Game Collection</p>
      </div>

      <div className="ml-6 mt-6 space-x-5">
        <select
          onChange={(e) => setSortType(e.target.value)}
          name="rating"
          className="select select-bordered w-full text-base max-w-xs"
        >
          <option disabled selected>
            Choose Your Sorted Name!
          </option>
          <option value="rating">Sort by Rating</option>
          <option value="year">Sort by Year</option>
        </select>
        <select
          onChange={(e) => setSelectedType(e.currentTarget.value)}
          name="genres"
          className="select select-bordered w-full max-w-xs text-base"
        >
          <option disabled selected>
            Chosees Your Genres!
          </option>
          <option value="action">Action</option>
          <option value="rpg">RPG</option>
          <option value="adventure">Adventure</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 gap-4">
        {reviewFilterData.length === 0
          ? "There is No Data in My Server Pocket"
          : reviewFilterData.map((review) => (
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

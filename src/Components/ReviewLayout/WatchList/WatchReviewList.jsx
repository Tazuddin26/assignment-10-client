
import { MdOutlineDelete } from "react-icons/md";

const WatchReviewList = ({ review, reviews, setReviews }) => {
  // const { _id, name, email, image, title, description, rating, year, genres } =
  //   review;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/watchList/${review._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const deleteWatchReview = reviews.filter((review) => review._id !== id);
        setReviews(deleteWatchReview);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div tabIndex={0} className="collapse collapse-arrow bg-slate-800 ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-white ">
          <p>watchList{review.name}</p>
        </div>
        <div className="collapse-content text-white lg:flex gap-10 ">
          <div className="card card-side flex justify-center shadow-xl lg:w-4/12">
            <figure className="">
              <img src={review.image} alt="Movie" className="rounded-xl" />
            </figure>
          </div>

          <div className="lg:w-8/12 ">
            <div className=" text-center lg:text-start ">
              <span className="badge badge-ghost bg-slate-800 text-white py-4 shadow-2xl mr-3">
                {review.title}
              </span>
              <span className="badge badge-ghost bg-slate-800 text-white py-4 px-4 mr-3">
                {review.genres}
              </span>
              <span className="badge badge-ghost bg-slate-800 text-white py-4 px-4 mr-3">
                {review.year}
              </span>
              <p className="mt-5 text-start ">{review.description}</p>
            </div>
            <div className="lg:mt-52 flex justify-end mr-4">
              {/* <NavLink to={`/updateReview/${_id}`} className="btn btn-neutral">
                <button>update game</button>
              </NavLink> */}
              <button onClick={() => handleDelete(review._id)} className="flex items-center gap-1 text-gray-300">
                <p>delete game</p>
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchReviewList;

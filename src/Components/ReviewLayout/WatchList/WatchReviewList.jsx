import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";

const WatchReviewList = ({ review, reviews, setReviews }) => {
  const { _id, name, email, image, title, description, rating, year, genres } =
    review;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-beta-steel.vercel.app/watchList/${review._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your WatchList has been deleted.",
                icon: "success",
              });
              const deleteWatchReview = reviews.filter((r) => r._id !== _id);
              setReviews(deleteWatchReview);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto ">
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-slate-800 space-y-4 lg:m-4"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-white ">
          <p>watchList: {name}</p>
        </div>
        <div className="collapse-content text-white lg:flex gap-10 ">
          <div className="card card-side flex justify-center shadow-xl lg:w-4/12">
            <figure className="">
              <img src={image} alt="Movie" className="rounded-xl" />
            </figure>
          </div>

          <div className="lg:w-full">
            <div className=" text-center lg:text-start ">
              <span className="badge badge-ghost bg-slate-800 text-white py-4 shadow-2xl mr-3">
                {title}
              </span>
              <span className="badge badge-ghost bg-slate-800 text-white py-4 px-4 mr-3">
                {genres}
              </span>
              <span className="badge badge-ghost bg-slate-800 text-white py-4 px-4 mr-3">
                {year}
              </span>
              <p className="mt-5 text-start ">{description}</p>
            </div>
            <div className="lg:mt-52 flex justify-end mr-4">
              <button
                onClick={() => handleDelete(_id)}
                className="flex items-center gap-1 text-gray-300"
              >
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

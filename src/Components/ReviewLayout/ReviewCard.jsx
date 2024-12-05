import { NavLink } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const { _id, name, email, image, title, description, rating, year, genres } =
    review;

  return (
    <div className="card-compact bg-base-100 shadow-xl rounded-xl border">
      <figure className="flex items-center gap-8 px-3 py-3 ">
        <img src={image} alt="Shoes" className="w-28 h-[150px] rounded-xl" />
        <div>
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center gap-2">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2"
              />
            </div>
            <p className="text-lg"> {rating}</p>
          </div>
        </div>
      </figure>
      <div className="card-body">
        <p>{description}</p>
        <div className="card-actions justify-end">
          <NavLink to={`/reviewDetails/${_id}`} className="btn btn-outline">
            <button>Explore Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

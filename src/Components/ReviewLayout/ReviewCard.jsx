import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ReviewCard = ({ review }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, email, image, title, description, rating, year, genres } =
    review;

  return (
    <div className="card-compact bg-slate-700 shadow-xl rounded-xl border mt-5 transition duration-150 hover:scale-110 hover:delay-500 hover:-translate-b-1 ">
      <figure className="flex items-center gap-8 px-3 py-3 text-white">
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
            <p>{year}</p>
          </div>
        </div>
      </figure>
      <div className="card-body text-white">
        <p>{description}</p>
        <div>
          <img src={user?.photoURL} alt="" className="w-12 rounded-full" />
        </div>

        <div className="card-actions justify-end">
          <NavLink
            to={`/reviewDetails/${_id}`}
            className="btn btn-outline bg-amber-900 text-white"
          >
            <button>Explore Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

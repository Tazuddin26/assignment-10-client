import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { NavLink, useLoaderData } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const loadedReview = useLoaderData();
  const [reviews, setReviews] = useState(loadedReview);
  // const { _id, name, email, image, title, description, rating, year, genres } =
  //   reviews;
  console.log(reviews);

  const handleDelete = (id) => {
    console.log("deleted", id);
    fetch(`http://localhost:5000/allReviews/${id}`, {
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
    <div className="max-w-7xl mx-auto  mt-20 my-10 bg-slate-800">
      Reviews: {reviews?.length || 0}
      <div className="overflow-x-auto p-4  ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-base text-white">
              <th>Select</th>
              <th className="">Name</th>
              <th>Game Image</th>

              <th>Name of game</th>
              <th>Rating</th>
              <th>Relase Year</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {reviews?.map((review, index) => (
              <tr key={review._id} className="text-white ">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox bg-white" />
                  </label>
                </th>
                <td className=" w-60 ">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user?.photoURL} alt="Image" />
                      </div>
                    </div>

                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm opacity-50">{review.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="">
                    <img
                      src={review.image}
                      alt=""
                      className="w-10 h-10 rounded-xl"
                    />
                  </div>
                </td>
                <td className="text-base font-bold">
                  {review.title}
              
                </td>
                <td className="flex items-center gap-2">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <span className="text-base font-bold"> {review.rating}</span>
                </td>
                <td className="text-base font-bold">{review.year}</td>
                <th className="space-x-3 flex items-center">
                  <NavLink
                    to={`/updateReview/${review._id}`}
                    className="btn btn-neutral btn-sm hover:bg-sky-500"
                  >
                    <button>
                      <FaRegEdit size={24} />
                    </button>
                  </NavLink>

                  <button onClick={() => handleDelete(review._id)}>
                    <MdOutlineDelete size={24} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;

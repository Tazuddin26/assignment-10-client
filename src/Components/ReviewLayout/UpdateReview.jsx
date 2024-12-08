import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const loadedReview = useLoaderData();
  const { _id, name, email, image, title, description, rating, year, genres } =
    loadedReview;
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genres = form.genres.value;

    const updateReview = {
      name,
      email,
      image,
      title,
      description,
      rating,
      year,
      genres,
    };
    console.log(updateReview);
    fetch(
      `https://assignment-10-server-beta-steel.vercel.app/allReviews/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // sweet Alert set by data.insertedId
        e.target.reset();
      });
  };
  return (
    <div className="bg-slate-800  max-w-7xl mx-auto mt-10">
      <div className=" py-5 bg-blue-950 text-center">
        <p className="text-2xl text-white">Update Review Area</p>
      </div>
      <div className=" flex mb-10 justify-center ">
        <div className=" bg-slate-800 w-full max-w-2xl shrink-0 shadow-2xl rounded-2xl">
          <form onSubmit={handleUpdateReview} className="gap-5 ">
            <div className="card-body flex-row ">
              <div className="w-full">
                <div className="form-control ">
                  <label className="label ">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user?.displayName}
                    placeholder="Name"
                    className="input input-bordered"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user?.email}
                    placeholder="email"
                    className="input input-bordered"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Game Cover Image{" "}
                    </span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="PhotoURL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Game Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    placeholder="Game-Title"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Review Description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    placeholder="About Review"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    defaultValue={rating}
                    placeholder="Rating Here"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Publishing Year
                    </span>
                  </label>
                  <input
                    type="text"
                    name="year"
                    defaultValue={year}
                    placeholder="Published"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Genres</span>
                  </label>

                  <select
                    name="genres"
                    defaultValue={genres}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Chosees Your Genres!
                    </option>
                    <option value="action">Action</option>
                    <option value="rpg">RPG</option>
                    <option value="adventure">Adventure</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-control  mb-6 space-y-3 px-6">
              <button className="btn btn-outline bg-blue-950 text-white">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;

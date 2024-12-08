import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  

  const [genres, setGenres] = useState("Chosees Your Genres");
  const handleSubmitReview = (e) => {
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

    const allReview = {
      name,
      email,
      image,
      title,
      description,
      rating,
      year,
      genres,
    };
    console.log(allReview);

    fetch("http://localhost:5000/addReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset()
        // sweet Alert set by data.insertedId
      });
  };
  return (
    <div className="bg-sky-200  max-w-7xl mx-auto border mt-10">
      <div className="border py-5 bg-info text-center">
        <p className="text-2xl">Add Review Area</p>
      </div>
      <div className=" flex my-10 justify-center ">
        <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <form onSubmit={handleSubmitReview} className="card-body">
            <h1 className="text-2xl font-bold text-center text-gray-600">
              Add Review
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
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
                <span className="label-text">Email</span>
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
                <span className="label-text">Game Cover Image </span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Game-Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="About Review"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating Here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Publishing Year</span>
              </label>
              <input
                type="text"
                name="year"
                placeholder="Published"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Genres</span>
              </label>

              <select
                // value={genres}
                // onChange={(e) => setGenres(e.target.value)}
                name="genres"
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

            <div className="form-control mt-6 space-y-3">
              <button className="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;

import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
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
    fetch(`http://localhost:5000/allReviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-sky-200  max-w-7xl mx-auto border mt-10">
      <div className="border py-5 bg-info text-center">
        <p className="text-2xl">Add Review Area</p>
      </div>
      <div className=" flex my-10 justify-center ">
        <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <form onSubmit={handleUpdateReview} className="card-body">
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
                defaultValue={name}
                placeholder="Name"
                className="input input-bordered"
                required
                // readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                placeholder="email"
                className="input input-bordered"
                required
                // readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Cover Image </span>
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
                <span className="label-text">Game Title</span>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review Description</span>
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
                <span className="label-text">Rating</span>
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
                <span className="label-text">Publishing Year</span>
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
                <span className="label-text">Genres</span>
              </label>

              <select
                // value={genres}
                // onChange={(e) => setGenres(e.target.value)}
                name="genres"
                defaultValue={genres}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Chosees Your Genres!
                </option>
                <option>Action</option>
                <option>RPG</option>
                <option>Adventure</option>
              </select>
            </div>

            <div className="form-control mt-6 space-y-3">
              <button className="btn btn-info">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;

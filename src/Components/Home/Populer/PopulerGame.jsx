import React from "react";

const PopulerGame = ({ game }) => {
  const { image, title ,rating} = game;

  return (
    <div className="card bg-base-100 shadow-xl border p-3 ">
      <figure className="flex-col transition duration-150 hover:scale-110 hover:delay-500 hover:-translate-b-1 ">
        <img src={image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card items-center text-center ">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default PopulerGame;

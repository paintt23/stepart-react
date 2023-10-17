import React from "react";

function Card({ imageUrl, name, shotDetails, price }) {
  return (
    <div className="card card-compact w-72 bg-[#1D1EB8] shadow-xl">
      <figure className="bg-orange-300 h-[288px]">
        <img src={imageUrl} alt="drawing" className="h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white text-3xl">{name}</h2>
        <p className=" text-white ">{shotDetails}</p>
        <hr />
        <h3 className="font-bold  text-white text-2xl">{price}</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-primary  text-white">See Details </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

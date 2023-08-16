import React from "react";
import "./Card.css";
const Card = (creator) => {
  console.log(creator);
  return (
    <>
      <div
        className="card-container"
        style={{ backgroundImage: `url( ${creator.image} )` }}
      >
        <div key={creator.id}>
          <h2>{creator.name}</h2>
          <p>{creator.Description}</p>
          <h5>{creator.youtube}</h5>
          <h5>{creator.twitter}</h5>
          <h5>{creator.instagram}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;

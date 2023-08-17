import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { AiFillYoutube,AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai"
const Card = (creator) => {
  console.log(creator);
  const youtube = () => {
    window.open(`https://www.youtube.com/@` + creator.youtube, "_blank");
  }
  const instagram = () => {
    window.open(`https://www.instagram.com/` + creator.instagram, "_blank");
  }
  const twitter = () => {
    window.open(`https://twitter.com/` + creator.twitter, "_blank");
  }

  return (
    <>
      <div
        className="card-container"
        style={{ backgroundImage: `url( ${creator.image} )` }}
      >
        <div key={creator.id}>
          <h2>{creator.name}</h2>
          <AiFillYoutube onClick={youtube} size="50px" />
          <AiFillTwitterCircle onClick={twitter} size="50px"/>
          <AiFillInstagram onClick={instagram} size="50px" />
          <h3>{creator.description}</h3>
        </div>
        <Link to={`/edit/${creator.id}`} style={{ color: "black", fontSize: "40px"}}>Edit</Link>
      </div>
    </>
  );
};

export default Card;

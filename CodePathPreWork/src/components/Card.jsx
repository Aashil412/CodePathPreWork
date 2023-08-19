import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { AiFillYoutube,AiFillTwitterCircle,AiFillInstagram,AiFillEdit} from "react-icons/ai"
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
        <div className="mouse"> 
        <div key={creator.id}>
        <Link to={`/${creator.id}`}><h2>{creator.name}</h2></Link>
          <AiFillYoutube onClick={youtube} size="60px" />
          <AiFillTwitterCircle onClick={twitter} size="60px"/>
          <AiFillInstagram onClick={instagram} size="60px" />
          <Link to={`/edit/${creator.id}`} style={{ color: "black", fontSize: "60px"}}><AiFillEdit/></Link>
            
            </div>
        </div>
        <h3>{creator.description}</h3>
      </div>
    </>
  );
};

export default Card;

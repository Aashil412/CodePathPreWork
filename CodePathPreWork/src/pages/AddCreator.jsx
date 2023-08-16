import { useState } from "react";
import { useNavigate } from "react-router";
import CreatorForm from "../components/Form";
import { supabase } from "../client";

function AddCreator() {
  const [creator, setCreator] = useState({});
  const navigate = useNavigate();

  const insertCreator = async (event) => {
    event.preventDefault();

    const resp = await supabase
      .from("creators")
      .insert({
        name: creator.name,
        image: creator.image,
        description: creator.description,
        youtube: creator.youtube,
        twitter: creator.twitter,
        instagram: creator.instagram,
      })
      .select();
    navigate("/");
  };

  return (
    <div className="CE">
      <CreatorForm creator={creator} setCreator={setCreator} />

      <button onClick={insertCreator}>Submit</button>
    </div>
  );
}

export default AddCreator;

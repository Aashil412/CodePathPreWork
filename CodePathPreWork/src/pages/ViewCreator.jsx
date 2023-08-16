import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function ViewCreator() {
  const [creator, setCreator] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCreator = async () => {
      const { data } = await supabase.from("creators").select().eq("id", id);
      setCreator(data[0]);
    };

    getCreator().catch(console.error);
  }, []);

  const deleteCreator = async (event) => {
    event.preventDefault();

    const resp = await supabase.from("creators").delete().eq("id", id);

    navigate("/");
  };

  return (
    <div className="ViewCreator">
      <section className="creator-image">
        <img src={creator.image} alt={creator.name} />
      </section>

      <section className="creator-info">
        <h2>{creator.name}</h2>
        <p>{creator.description}</p>
        {creator.youtube && (
          <Link
            to={"https://www.youtube.com/" + creator.youtube}
            target="_blank"
          >
            <button className="social-button">
              <span />@{creator.youtube}
            </button>
          </Link>
        )}
        {creator.twitter && (
          <Link
            to={"https://www.twitter.com/" + creator.twitter}
            target="_blank"
          >
            <button className="social-button">
              <span />@{creator.twitter}
            </button>
          </Link>
        )}
        {creator.instagram && (
          <Link
            to={"https://www.instagram.com/" + creator.instagram}
            target="_blank"
          >
            <button className="social-button">
              <span />@{creator.instagram}
            </button>
          </Link>
        )}
      </section>

      <nav className="modify-creator">
        <ul>
          <li>
            <Link to={"/edit/" + id}>
              <button role="button">Edit</button>
            </Link>
          </li>
          <li>
            <button role="button" className="DB" onClick={deleteCreator}>
              Delete
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ViewCreator;

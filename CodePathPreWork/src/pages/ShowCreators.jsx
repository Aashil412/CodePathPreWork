import { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../components/Card";
function Showcreators() {
  const [creatorData, setCreatorData] = useState([]);

  useEffect(() => {
    const getcreators = async () => {
      const { data, error } = await supabase.from("creators").select();
      if (error) {
        console.log(error);
      }
      setCreatorData(data);
    };
    getcreators().catch(console.error);
  }, []);

  return (
    <section className="Showcreators">
      {creatorData && creatorData.length > 0 ? (
        creatorData.map((creator) => (
          <Card
            key={creator.id}
            id={creator.id}
            name={creator.name}
            youtube={creator.youtube}
            twitter={creator.twitter}
            instagram={creator.instagram}
            description={creator.description}
            image={creator.image}
          />
        ))
      ) : (
        <h3>{"No Creators"}</h3>
      )}
    </section>
  );
}

export default Showcreators;

import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client';
import { AiFillYoutube,AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai"
function ViewCreator() {
    const [creator, setCreator] = useState({ name: "", imageUrl: "", description: "", youtube: "", twitter:"", instagram:"" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCreator = async () => {
            // GET the selected Creator
            const { data } = await supabase
                .from("creators")
                .select()
                .eq('id', id);

            // Set the retrieved post creator to the state variable
            if (data && data.length != 0) {
                setCreator(data[0]);
            }
        }

        getCreator().catch(console.error);
    }, [])
    const youtube = () => {
      window.open(`https://www.youtube.com/@` + creator.youtube, "_blank");
    }
    const instagram = () => {
      window.open(`https://www.instagram.com/` + creator.instagram, "_blank");
    }
    const twitter = () => {
      window.open(`https://twitter.com/` + creator.twitter, "_blank");
    }
    const deleteCreator = async(event) => {
        event.preventDefault();

        const resp = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

        navigate("/");
    }

    return (
        <div className="ViewCreator">
            <section className="creator-image">
                <img src={creator.image} alt={creator.name}/>
            </section>

            <section >
          <h1 style={{fontSize: 100}}>{creator.name}</h1>
          <p style={{ fontSize: 50 }}>{creator.description}</p>
          <div className='creator-info'>
            <div className='creatorlinks'>
              <AiFillYoutube onClick={youtube} size="90px" /><h2 style={{fontSize:'50px'}}>{`@${creator.youtube}`}</h2>
            </div>
            <div className='creatorlinks'>
              <AiFillTwitterCircle onClick={twitter} size="90px" /><h2 style={{fontSize:'50px'}}>{`@${creator.twitter}`}</h2>
            </div>
            <div className='creatorlinks'>
              <AiFillInstagram onClick={instagram} size="90px" /><h2 style={{fontSize:'50px'}}>{`@${creator.instagram}`}</h2>
              </div>
            </div>
            </section>

            <nav className="modify-creator">
                <ul>
                    <li>
                        <Link to={'/edit/' + id}>
                            <button role='button'>Edit</button>
                        </Link>
                    </li>
                    <li>
                        <button role='button' className="delete-button" onClick={deleteCreator}>Delete</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ViewCreator
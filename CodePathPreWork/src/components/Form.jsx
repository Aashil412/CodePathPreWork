export default function Form({ creator, setCreator }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator({ ...creator, [name]: value });
  };

  return (
    <div>
      <form id="formid">
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={creator.name}
          onChange={handleChange}
          required
        />

        <label>
          Description
          <p>Provide a description of the creator</p>
        </label>
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={creator.description}
          onChange={handleChange}
          required
        ></textarea>

        <label>
          Image
          <p>Image of the creator</p>
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={creator.image}
          onChange={handleChange}
          required
        />

        <h3>Social Media Links</h3>

        <label>
          <span className="fa-brands fa-youtube"></span> YouTube
          <p>The creator's YouTube</p>
        </label>
        <input
          type="text"
          id="youtube"
          name="youtube"
          value={creator.youtube}
          onChange={handleChange}
        />

        <label>
          <span className="fa-brands fa-twitter"></span> Twitter
          <p>The creator's Twitter</p>
        </label>
        <input
          type="text"
          id="twitter"
          name="twitter"
          value={creator.twitter}
          onChange={handleChange}
        />

        <label>
          <span className="fa-brands fa-instagram"></span> Instagram
          <p>The creator's Instagram</p>
        </label>
        <input
          type="text"
          id="instagram"
          name="instagram"
          value={creator.instagram}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

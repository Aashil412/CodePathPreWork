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
          <p>Provide a link to an image of your creator. Be sure to include the http://</p>
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
          <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
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
        <p>Provide at least one of the creator's social media links.</p>
        <label>
          <span></span> YouTube
          <p>The creator's YouTube handle (without the @)</p>
        </label>
        <input
          type="text"
          id="youtube"
          name="youtube"
          value={creator.youtube}
          onChange={handleChange}
        />

        <label>
          <span></span> Twitter
          <p>The creator's Twitter handle (without the @)</p>
        </label>
        <input
          type="text"
          id="twitter"
          name="twitter"
          value={creator.twitter}
          onChange={handleChange}
        />

        <label>
          <span></span> Instagram
          <p>The creator's Instagram handle (without the @)</p>
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

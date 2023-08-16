import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <h1>Creators</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              <button role="button">View all the creators</button>
            </Link>
          </li>

          <li>
            <Link to={"/new"}>
              <button role="button">Add a creator</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

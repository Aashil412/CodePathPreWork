import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div>
      <Nav />
      <main className="Container">
        <Outlet />
      </main>
    </div>
  );
}

export default PageLayout;

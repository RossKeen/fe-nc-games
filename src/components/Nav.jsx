import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/reviews"}>
        Reviews
      </Link>
      <Link className="link" to={"/users"}>
        Users
      </Link>
    </nav>
  );
};

export default Nav;

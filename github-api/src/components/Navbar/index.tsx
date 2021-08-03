import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => {
  return (
    <nav className="bg-primary navbar main-nav">
      <div className="logo">
        <Link to="/" className="nav-logo-text">
          <h4>Github API</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

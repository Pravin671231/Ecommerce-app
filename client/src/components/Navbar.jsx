import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Ecommerce-app
      </Link>
      <div>
        <Link className="btn btn-outline-light me-2" to="/login">
          Login
        </Link>
        <Link className="btn btn-outline-light" to="/register">
          Register
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

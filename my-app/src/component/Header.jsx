import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Bella Vista</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/order" className="nav-link">
              Order
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/build-menu" className="nav-link">
              Build Menu
            </Link>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;

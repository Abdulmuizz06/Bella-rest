import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

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
          {user ? (
            <>
              <li className="nav-item nav-user">Hello, {user.name || user.email}</li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={(e) => {
                    e.preventDefault();
                    const ok = window.confirm('Are you sure you want to log out?');
                    if (ok) {
                      // navigate to logout page which handles the logout
                      window.location.href = '/logout';
                    }
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link to="/auth" className="nav-link">
                Login
              </Link>
            </li>
          )}
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

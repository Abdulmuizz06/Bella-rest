import { Link, NavLink, useNavigate } from "react-router-dom";
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
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/order" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Order
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/build-menu" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Build Menu
            </NavLink>
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
              <NavLink to="/auth" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                Login
              </NavLink>
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

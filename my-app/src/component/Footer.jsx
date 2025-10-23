import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bella Vista</h3>
            <p>
              Bringing authentic Italian flavors to your neighborhood since
              1985.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/order">Order Online</NavLink>
              </li>
              <li>
                <NavLink to="/About">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/new-menu">New-menu</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📍 12 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
            <p>📞 +234 809 123 4567</p>
            <p>✉️ info@bellavista.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Bella Vista Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
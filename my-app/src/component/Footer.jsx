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
                <a to="menu.html">Menu</a>
              </li>
              <li>
                <a to="order.html">Order Online</a>
              </li>
              <li>
                <a to="about.html">About Us</a>
              </li>
              <li>
                <a to="contact.html">Contact</a>
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

export default Footer;
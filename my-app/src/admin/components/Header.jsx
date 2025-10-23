import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { account } from "./../../lib/appwrite";

const Header = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    // Logic for logging out the user
    await account.deleteSession({
      sessionId: "current",
    });
    navigate("/auth/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-nav-container">
        <div className="admin-logo">
          <h2>Bella Vista Admin</h2>
        </div>
        <div className="admin-nav-menu">
          <NavLink to="/admin/dashboard" className="admin-nav-link active">
            Dashboard
          </NavLink>
          <NavLink to="/admin/menu-management" className="admin-nav-link">
            Menu
          </NavLink>
          <NavLink to="/admin/orders" className="admin-nav-link">
            Orders
          </NavLink>
          <NavLink to="/admin/customers" className="admin-nav-link">
            Customers
          </NavLink>
          <button className="btn btn-secondary" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

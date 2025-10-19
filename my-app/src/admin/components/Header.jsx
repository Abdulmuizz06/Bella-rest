import { NavLink, useNavigate } from "react-router-dom";
import { account } from "./../../lib/appwrite";
import { useUser } from "../../context/UserContext"; // ✅ Import context

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser(); // ✅ Access user & setter

  const handleLogOut = async () => {
    try {
      await account.deleteSession("current");
      setUser(null); // ✅ Clear user from context
      navigate("/login"); // ✅ Correct path
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-nav-container">
        <div className="admin-logo">
          <h2>Bella Vista Admin</h2>
        </div>

        <div className="admin-nav-menu">
          <NavLink to="/dashboard" className="admin-nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/menu" className="admin-nav-link">
            Menu
          </NavLink>
          <NavLink to="/admin/orders" className="admin-nav-link">
            Orders
          </NavLink>
          <NavLink to="/admin/customers" className="admin-nav-link">
            Customers
          </NavLink>

          {user && (
            <span className="admin-user-info">
              Welcome, <strong>{user.name}</strong>
            </span>
          )}

          <button className="btn btn-secondary" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

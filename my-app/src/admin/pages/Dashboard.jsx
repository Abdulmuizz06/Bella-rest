import { useContext } from "react";
import { UserContext } from "./../../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <main className="admin-main">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Dashboard</h1>
            <p>
              Welcome back! Here's what's happening at your restaurant today.
            </p>
          </div>

          <div className="admin-header">
            <h3>User Name {user && user.name}</h3>
          </div>
          <div className="admin-header">
            <h5>User Email {user && user.email}</h5>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <h3 id="totalOrders">0</h3>
                <p>Total Orders Today</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-content">
                <h3 id="totalRevenue">$0.00</h3>
                <p>Revenue Today</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🍽️</div>
              <div className="stat-content">
                <h3 id="menuItems">0</h3>
                <p>Menu Items</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3 id="totalCustomers">0</h3>
                <p>Total Customers</p>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-section">
              <div className="section-header">
                <h2>Recent Orders</h2>
                <a href="orders.html" className="btn btn-secondary">
                  View All
                </a>
              </div>
              <div className="recent-orders" id="recentOrders">
                {/*  Recent orders will be populated here  */}
              </div>
            </div>

            <div className="dashboard-section">
              <div className="section-header">
                <h2>Quick Actions</h2>
              </div>
              <div className="quick-actions">
                <a href="menu-management.html" className="action-card">
                  <div className="action-icon">🍕</div>
                  <div className="action-content">
                    <h3>Manage Menu</h3>
                    <p>Add, edit, or remove menu items</p>
                  </div>
                </a>
                <a href="orders.html" className="action-card">
                  <div className="action-icon">📋</div>
                  <div className="action-content">
                    <h3>View Orders</h3>
                    <p>Process and confirm orders</p>
                  </div>
                </a>
                <a href="customers.html" className="action-card">
                  <div className="action-icon">👤</div>
                  <div className="action-content">
                    <h3>Customer Management</h3>
                    <p>View customer information</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
const AdminOrder = ({user}) => {
  return (
    <main className="admin-main">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Order Management</h1>
          <div className="order-stats">
            <span className="stat-badge pending" id="pendingCount">
              0 Pending
            </span>
            <span className="stat-badge confirmed" id="confirmedCount">
              0 Confirmed
            </span>
            <span className="stat-badge completed" id="completedCount">
              0 Completed
            </span>
          </div>
        </div>
        <div className="admin-header">
          <h3>User Name {user && user.name}</h3>
        </div>
        <div className="admin-header">
          <h5>User Email {user && user.email}</h5>
        </div>
        <div className="order-filters">
          <div className="filter-group">
            <label for="statusFilter">Filter by Status:</label>
            <select id="statusFilter" className="form-select">
              <option value="all">All Orders</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="filter-group">
            <label for="dateFilter">Date:</label>
            <input type="date" id="dateFilter" className="form-input" />
          </div>
        </div>

        <div className="orders-grid" id="ordersGrid">
          {/* <!-- Orders will be populated here --> */}
        </div>
      </div>
    </main>
  );
};

export default AdminOrder;
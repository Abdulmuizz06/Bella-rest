const Customer = ({user}) => {
  return (
    <main className="admin-main">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Customer Management</h1>
          <div className="customer-stats">
            <span className="stat-badge">
              Total: <span id="totalCustomersCount">0</span>
            </span>
            <span className="stat-badge">
              Active: <span id="activeCustomersCount">0</span>
            </span>
          </div>
        </div>
        <div className="admin-header">
          <h3>User Name {user && user.name}</h3>
        </div>
        <div className="admin-header">
          <h5>User Email {user && user.email}</h5>
        </div>
        <div className="customer-filters">
          <div className="filter-group">
            <label for="searchCustomers">Search Customers:</label>
            <input
              type="text"
              id="searchCustomers"
              className="form-input"
              placeholder="Search by name or email..."
            />
          </div>
          <div className="filter-group">
            <label for="sortCustomers">Sort by:</label>
            <select id="sortCustomers" className="form-select">
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="orders">Order Count</option>
              <option value="joined">Join Date</option>
            </select>
          </div>
        </div>

        <div className="customers-table-container">
          <table className="customers-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="customersTableBody">
              {/* <!-- Customer data will be populated by JavaScript --> */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Customer;
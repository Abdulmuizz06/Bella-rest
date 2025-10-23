const MenuManagement = ({user}) => {
  return (
    <main className="admin-main">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Menu Management</h1>
          <button className="btn btn-primary" onclick="openAddItemModal()">
            Add New Item
          </button>
        </div>
        <div className="admin-header">
          <h3>User Name {user && user.name}</h3>
        </div>
        <div className="admin-header">
          <h5>User Email {user && user.email}</h5>
        </div>
        <div className="menu-filters">
          <div className="filter-group">
            <label for="categoryFilter">Filter by Category:</label>
            <select id="categoryFilter" className="form-select">
              <option value="all">All Categories</option>
              <option value="appetizers">Appetizers</option>
              <option value="pasta">Pasta</option>
              <option value="pizza">Pizza</option>
              <option value="mains">Main Courses</option>
              <option value="desserts">Desserts</option>
            </select>
          </div>
          <div className="filter-group">
            <label for="searchMenu">Search:</label>
            <input
              type="text"
              id="searchMenu"
              className="form-input"
              placeholder="Search menu items..."
            />
          </div>
        </div>

        <div className="menu-management-grid" id="menuManagementGrid">
          {/* <!-- Menu items will be populated here --> */}
        </div>
      </div>
    </main>
  );
}

export default MenuManagement;
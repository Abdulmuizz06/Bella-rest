import { useState } from "react";
import { menuData } from "./db";
import { useNavigate } from "react-router-dom";

const NewMenu = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    menuName: "",
    menuDescription: "",
    menuPrice: "",
    menuCategory: "",
    menuImage: "",
  });

  const handleAddNewMenu = (e) => {
    try {
      e.preventDefault();
      const lastItem = menuData["desserts"];
      const id = lastItem[lastItem.length - 1].id + 1;
      const newMenuItem = {
        id: id,
        name: formData.menuName,
        description: formData.menuDescription,
        price: parseFloat(formData.menuPrice),
        image: formData.menuImage,
        tags: [],
      };

      menuData[formData.menuCategory].push(newMenuItem);
      // alert("New menu item added successfully!");

      // Reset form after submission
      setFormData({
        menuName: "",
        menuDescription: "",
        menuPrice: "",
        menuCategory: "",
        menuImage: "",
      });

      navigate("/menu");
    } catch (error) {
      console.error("Error adding new menu item:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleAddNewMenu}>
      <div className="form-group">
        <label htmlFor="menuName">Menu Name:</label>
        <input
          className="form-input"
          type="text"
          id="menuName"
          name="menuName"
          value={formData.menuName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="menuDescription">Description:</label>
        <textarea
          className="form-textarea"
          id="menuDescription"
          name="menuDescription"
          value={formData.menuDescription}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="menuPrice">Price:</label>
        <input
          className="form-input"
          type="number"
          id="menuPrice"
          name="menuPrice"
          value={formData.menuPrice}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="menuCategory">Category:</label>
        <select
          className="form-select"
          id="menuCategory"
          name="menuCategory"
          value={formData.menuCategory}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="appetizers">Appetizers</option>
          <option value="pasta">Pasta</option>
          <option value="pizza">Pizza</option>
          <option value="mains">Main Courses</option>
          <option value="desserts">Desserts</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="menuImage">Image URL:</label>
        <input
          className="form-input"
          type="url"
          id="menuImage"
          name="menuImage"
          value={formData.menuImage}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add Menu
      </button>
    </form>
  );
};

export default NewMenu;
import { useState, useEffect } from "react";
import "./../css/menu.css";

const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Bruschetta Classica",
      description: "Grilled bread with fresh tomatoes, basil, and garlic",
      price: 12.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: ["vegetarian", "popular"],
    },
    {
      id: 2,
      name: "Antipasto Platter",
      description:
        "Selection of Italian meats, cheeses, and marinated vegetables",
      price: 18.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: ["popular"],
    },
    {
      id: 3,
      name: "Calamari Fritti",
      description: "Crispy fried squid rings with marinara sauce",
      price: 14.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: [],
    },
  ],
  pasta: [
    {
      id: 4,
      name: "Spaghetti Carbonara",
      description: "Classic Roman pasta with eggs, pancetta, and parmesan",
      price: 22.99,
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
      tags: ["popular"],
    },
    {
      id: 5,
      name: "Fettuccine Alfredo",
      description: "Rich and creamy parmesan sauce with fresh fettuccine",
      price: 19.99,
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
      tags: ["vegetarian"],
    },
    {
      id: 6,
      name: "Penne Arrabbiata",
      description: "Spicy tomato sauce with garlic, chili, and herbs",
      price: 18.99,
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
      tags: ["vegetarian", "spicy"],
    },
    {
      id: 7,
      name: "Lasagna Bolognese",
      description:
        "Traditional layered pasta with meat sauce and three cheeses",
      price: 24.99,
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
      tags: ["popular"],
    },
  ],
  pizza: [
    {
      id: 8,
      name: "Margherita Pizza",
      description: "San Marzano tomatoes, fresh mozzarella, and basil",
      price: 18.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: ["vegetarian", "popular"],
    },
    {
      id: 9,
      name: "Pepperoni Pizza",
      description: "Classic pepperoni with mozzarella and tomato sauce",
      price: 21.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: ["popular"],
    },
    {
      id: 10,
      name: "Quattro Stagioni",
      description:
        "Four seasons pizza with mushrooms, ham, artichokes, and olives",
      price: 26.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: [],
    },
  ],
  mains: [
    {
      id: 11,
      name: "Osso Buco",
      description: "Braised veal shanks with risotto Milanese",
      price: 32.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: [],
    },
    {
      id: 12,
      name: "Chicken Parmigiana",
      description: "Breaded chicken breast with marinara and mozzarella",
      price: 26.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: ["popular"],
    },
    {
      id: 13,
      name: "Branzino Mediterranean",
      description: "Pan-seared sea bass with lemon, herbs, and vegetables",
      price: 28.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: [],
    },
  ],
  desserts: [
    {
      id: 14,
      name: "Tiramisu",
      description: "Classic coffee-flavored dessert with mascarpone",
      price: 8.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: ["popular"],
    },
    {
      id: 15,
      name: "Panna Cotta",
      description: "Vanilla bean custard with berry compote",
      price: 7.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: ["vegetarian"],
    },
    {
      id: 16,
      name: "Cannoli",
      description: "Sicilian pastry tubes filled with sweet ricotta",
      price: 9.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      tags: ["vegetarian"],
    },
  ],
};

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const allItems = [];
    Object.values(menuData).forEach((categoryItems) => {
      allItems.push(...categoryItems);
    });
    setMenu(allItems);
  }, []);

  const handleCategoryClick = (category) => {
    if (category === "all") {
      const newItems = [];
      Object.values(menuData).forEach((categoryItems) => {
        newItems.push(...categoryItems);
      });
      setMenu(newItems);
      setActiveTab("all");
    } else {
      setMenu(menuData[category] || []);
      setActiveTab(category);
    }
  };

  return (
    <>
      <main>
        <section className="menu-hero">
          <div className="container">
            <h1>Our Menu</h1>
            <p>
              Discover our carefully crafted selection of authentic Italian
              dishes
            </p>
          </div>
        </section>

        <section className="menu-categories">
          <div className="container">
            <div className="category-tabs">
              <button
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
                data-category="all"
                onClick={() => handleCategoryClick("all")}
              >
                All Items
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "appetizers" ? "active" : ""
                }`}
                data-category="appetizers"
                onClick={() => handleCategoryClick("appetizers")}
              >
                Appetizers
              </button>
              <button
                className={`tab-btn ${activeTab === "pasta" ? "active" : ""}`}
                data-category="pasta"
                onClick={() => handleCategoryClick("pasta")}
              >
                Pasta
              </button>
              <button
                className={`tab-btn ${activeTab === "pizza" ? "active" : ""}`}
                data-category="pizza"
                onClick={() => handleCategoryClick("pizza")}
              >
                Pizza
              </button>
              <button
                className={`tab-btn ${activeTab === "mains" ? "active" : ""}`}
                data-category="mains"
                onClick={() => handleCategoryClick("mains")}
              >
                Main Courses
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "desserts" ? "active" : ""
                }`}
                data-category="desserts"
                onClick={() => handleCategoryClick("desserts")}
              >
                Desserts
              </button>
            </div>

            <div className="menu-grid" id="menuGrid">
              {/* <!-- Menu items will be populated by JavaScript --> */}
              {menu.length > 0 &&
                menu.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="menu-item-image">
                      <img src={item.image} alt={item.name} loading="lazy" />
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-header">
                        <h3 className="menu-item-title">{item.name}</h3>
                        <span className="menu-item-price">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="menu-item-description">
                        {item.description}
                      </p>
                      <div className="menu-item-tags">
                        {item.tags.map((tag, index) => (
                          <span key={index} className={`menu-tag ${tag}`}>
                            {tag}{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;
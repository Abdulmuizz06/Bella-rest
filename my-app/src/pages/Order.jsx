import "./../css/order.css";
import { useState, useMemo } from "react";

const orderMenuData = {
  appetizers: [
    {
      id: 1,
      name: "Bruschetta Classica",
      description: "Grilled bread with fresh tomatoes, basil, and garlic",
      price: 12.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    },
    {
      id: 2,
      name: "Antipasto Platter",
      description:
        "Selection of Italian meats, cheeses, and marinated vegetables",
      price: 18.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    },
    {
      id: 3,
      name: "Calamari Fritti",
      description: "Crispy fried squid rings with marinara sauce",
      price: 14.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
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
    },
    {
      id: 5,
      name: "Fettuccine Alfredo",
      description: "Rich and creamy parmesan sauce with fresh fettuccine",
      price: 19.99,
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    },
    {
      id: 6,
      name: "Penne Arrabbiata",
      description: "Spicy tomato sauce with garlic, chili, and herbs",
      price: 18.99,
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
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
    },
    {
      id: 9,
      name: "Pepperoni Pizza",
      description: "Classic pepperoni with mozzarella and tomato sauce",
      price: 21.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    },
  ],
  mains: [
    {
      id: 11,
      name: "Chicken Parmigiana",
      description: "Breaded chicken breast with marinara and mozzarella",
      price: 26.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    },
    {
      id: 12,
      name: "Branzino Mediterranean",
      description: "Pan-seared sea bass with lemon, herbs, and vegetables",
      price: 28.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
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
    },
    {
      id: 15,
      name: "Cannoli",
      description: "Sicilian pastry tubes filled with sweet ricotta",
      price: 9.99,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    },
  ],
};

const MenuItem = ({ item, onAddToCart }) => (
  <div className="order-menu-item" data-category={item.category}>
    <div className="item-image">
      <img src={item.image} alt={item.name} />
    </div>
    <div className="item-details">
      <h4 className="item-name">{item.name}</h4>
      <p className="item-description">{item.description}</p>
      <span className="item-price">${item.price.toFixed(2)}</span>
    </div>
    <button className="add-to-cart-btn" onClick={() => onAddToCart(item)}>
      Add to Cart
    </button>
  </div>
);

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => (
  <div className="cart-item">
    <div className="cart-item-details">
      <span className="cart-item-name">{item.name}</span>
      <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
    </div>
    <div className="quantity-controls">
      <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
      <span className="quantity">{item.quantity}</span>
      <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>Remove</button>
    </div>
  </div>
);

const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allMenuItems = useMemo(() =>
    Object.entries(orderMenuData).flatMap(([category, items]) =>
      items.map((item) => ({ ...item, category }))
    ), []);

  const filteredMenuItems = useMemo(() =>
    selectedCategory === "all"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === selectedCategory),
    [selectedCategory, allMenuItems]
  );

  const handleAddToCart = (itemToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveItem(itemId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <>
    <main>
        <section className="order-hero">
            <div className="container">
                <h1>Place Your Order</h1>
                <p>Choose from our delicious selection and have it delivered fresh to your door</p>
            </div>
        </section>

        <section className="order-content">
            <div className="container">
                <div className="order-layout">
                    <div className="order-menu">
                        <div className="category-selector">
                            {["all", "appetizers", "pasta", "pizza", "mains", "desserts"].map(category => (
                                <button 
                                    key={category}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`} 
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                        
                        <div className="menu-items" id="orderMenuItems">
                            {filteredMenuItems.map(item => (
                                <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
                            ))}
                        </div>
                    </div>

                    <div className="cart-section">
                        <div className="cart-header">
                            <h3>Your Order</h3>
                            <span className="cart-count" id="cartCount">{cartCount} items</span>
                        </div>
                        
                        <div className="cart-items" id="cartItems">
                            {cartItems.length === 0 ? (
                                <div className="empty-cart">
                                    <p>Your cart is empty</p>
                                    <p>Add some delicious items to get started!</p>
                                </div>
                            ) : (
                                cartItems.map(item => (
                                    <CartItem 
                                        key={item.id} 
                                        item={item} 
                                        onUpdateQuantity={handleUpdateQuantity} 
                                        onRemoveItem={handleRemoveItem} 
                                    />
                                ))
                            )}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total">
                                <div className="total-line">
                                    <span>Subtotal:</span>
                                    <span id="subtotal">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="total-line">
                                    <span>Tax:</span>
                                    <span id="tax">${tax.toFixed(2)}</span>
                                </div>
                                <div className="total-line total">
                                    <span>Total:</span>
                                    <span id="total">${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <button className="btn btn-primary checkout-btn" id="checkoutBtn" disabled={cartItems.length === 0}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  );
};

export default Order;
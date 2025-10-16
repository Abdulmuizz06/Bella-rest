import "./../css/home.css";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (location?.state?.loggedOut) {
      setToast('You have been logged out');
      const t = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(t);
    }
  }, [location]);

  return (
    <main>
      {toast && (
        <div style={{ position: 'fixed', top: 16, right: 16, background: '#333', color: '#fff', padding: '8px 12px', borderRadius: 6, zIndex: 9999 }}>
          {toast}
        </div>
      )}
      {/*  Hero Section  */}
      <section className="hero">
        <div className="container">
          <div className="hero-flex">
            <div className="hero-content">
              <h1>Welcome to Bella Vista</h1>
              <p>Experience authentic Italian cuisine with a modern twist</p>
              <div className="hero-buttons">
                <a to="menu.html" className="btn btn-primary">
                  View Menu
                </a>
                <a to="order.html" className="btn btn-secondary">
                  Order Now
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
                alt="Delicious Italian Food"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  Features Section  */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Bella Vista?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍝</div>
              <h3>Authentic Recipes</h3>
              <p>Traditional Italian recipes passed down through generations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Fresh Ingredients</h3>
              <p>Locally sourced, organic ingredients for the best taste</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Master Chefs</h3>
              <p>
                Experienced chefs bringing culinary excellence to your table
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Popular Dishes Section --> */}
      <section className="popular-dishes">
        <div className="container">
          <h2>Popular Dishes</h2>
          <div className="dishes-grid">
            <div className="dish-card">
              <img
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
                alt="Margherita Pizza"
              />
              <div className="dish-info">
                <h3>Margherita Pizza</h3>
                <p>classNameic tomato, mozzarella, and basil</p>
                <span className="price">$18.99</span>
              </div>
            </div>
            <div className="dish-card">
              <img
                src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg"
                alt="Spaghetti Carbonara"
              />
              <div className="dish-info">
                <h3>Spaghetti Carbonara</h3>
                <p>Creamy pasta with pancetta and parmesan</p>
                <span className="price">$22.99</span>
              </div>
            </div>
            <div className="dish-card">
              <img
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
                alt="Tiramisu"
              />
              <div className="dish-info">
                <h3>Tiramisu</h3>
                <p>classNameic Italian dessert with coffee and mascarpone</p>
                <span className="price">$8.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Taste the Difference?</h2>
            <p>
              Join thousands of satisfied customers who have made Bella Vista
              their favorite dining destination
            </p>
            <a to="order.html" className="btn btn-primary">
              Start Your Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
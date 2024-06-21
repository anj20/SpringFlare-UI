import React from 'react';
import './HomePage.css';
import user1Image from '../../assets/images/user1.png';
import heroImg from "../../assets/images/heroimg.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <nav>
          <div className="logo">Style.Loom</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="contact-button">Contact</button>
        </nav>
      </header>
      <section className="hero-section">
        <img src={heroImg} alt="Hero" className="hero-image"/>
        <div className="hero-content">
          <h1>Elevate Your Style with Style.Loom</h1>
          <p>Explore a world of fashion at Style.Loom, where trends meet craftsmanship. Enhance your wardrobe with our latest collection and exclusive designs.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </section>
      
      <section className="stats-section">
        <div className="stat">
          <h2>1,500+</h2>
          <p>Fashion Products</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>New arrivals every month</p>
        </div>
        <div className="stat">
          <h2>30%</h2>
          <p>Off on selected items</p>
        </div>
        <div className="stat">
          <h2>95%</h2>
          <p>Customer Satisfaction</p>
        </div>
      </section>

      <section className="features-section">
        <h2>Crafting Trends, Inspiring Confidence</h2>
        <div className="features">
          <div className="feature">
            <h3>Passionate Craftsmanship</h3>
            <p>Dedicated artisans bring you the finest quality fashion items.</p>
          </div>
          <div className="feature">
            <h3>Fashion Forward</h3>
            <p>Stay ahead with our trendsetting styles and designs.</p>
          </div>
          <div className="feature">
            <h3>Customer-Centric Approach</h3>
            <p>Your satisfaction is our priority, from browsing to delivery.</p>
          </div>
          <div className="feature">
            <h3>Global Inspiration</h3>
            <p>Our collection is inspired by trends from across the globe.</p>
          </div>
          <div className="feature">
            <h3>Empowering Your Style</h3>
            <p>Our mission is to make you look and feel your best every day.</p>
          </div>
          <div className="feature">
            <h3>Sustainable Practices</h3>
            <p>Committed to ethical and sustainable fashion practices.</p>
          </div>
        </div>
      </section>
      
      <section className="products-section">
        <h2>Elevate Your Style with Our Latest Collection</h2>
        <div className="product-list">
          <div className="product-item">
            <img src={user1Image} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button className="shop-now-button">Shop Now</button>
          </div>
          <div className="product-item">
            <img src={user1Image} alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <button className="shop-now-button">Shop Now</button>
          </div>
          <div className="product-item">
            <img src={user1Image} alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <button className="shop-now-button">Shop Now</button>
          </div>
          <div className="product-item">
            <img src={user1Image} alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <button className="shop-now-button">Shop Now</button>
          </div>
          <div className="product-item">
            <img src={user1Image} alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <button className="shop-now-button">Shop Now</button>
          </div>
          <div className="product-item">
            <img src={user1Image} alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <button className="shop-now-button">Shop Now</button>
          </div>
          <div className="product-item">
            <img src={user1Image} alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <button className="shop-now-button">Shop Now</button>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <h2>The Style.Loom Testimonial Collection</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Amazing experience! The quality is top-notch and the styles are unique."</p>
            <h3>Sarah Thompson</h3>
          </div>
          <div className="testimonial">
            <p>"I love the new collection. Everything is well-made and fashionable."</p>
            <h3>Ralph Floyd</h3>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <h2>Have Questions? We Have Answers.</h2>
        <div className="faqs">
          <div className="faq">
            <h3>How can I place an order on Style.Loom?</h3>
            <p>Simply browse our collection, add items to your cart, and checkout.</p>
          </div>
          <div className="faq">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and other secure payment options.</p>
          </div>
          <div className="faq">
            <h3>How do I initiate a return?</h3>
            <p>Visit our Returns page for detailed instructions. Ensure you have your order number and the product in its original packaging.</p>
          </div>
          <div className="faq">
            <h3>Do you offer exchanges for products?</h3>
            <p>At this time, we do not offer exchanges. Please return your item and place a new order.</p>
          </div>
        </div>
      </section>
      
      <footer className="home-footer">
        <div className="footer-top">
          <p>Elevate Your Wardrobe</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <p>&copy; 2024 Style.Loom. All rights reserved.</p>
        <div className="social-media">
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#twitter">Twitter</a>
          <a href="#youtube">YouTube</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">SpringFlare</Link></div>
      <ul className="nav-links">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/add-orders">Add Order</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
      <div className="auth-buttons">
        <button className="contact-button"><Link to="/add-users">Register User</Link></button>
        <button className="contact-button"><Link to="/login">Login User</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;

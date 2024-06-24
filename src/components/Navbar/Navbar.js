import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo text-green-800 ">SpringFlare</Link>
      <ul className="nav-links">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/add-orders">Add Order</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/add-users">Register User</Link>
        <Link to="/login">Login User</Link>
      </div>
    </nav>
  );
};

export default Navbar;

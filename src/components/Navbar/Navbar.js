import React, {useState, useEffect} from 'react';
import { Link  } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user'); 
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <Link to={isAuthenticated ? "/" : "/login"} className="logo text-green-800 ">SpringFlare</Link>
      {isAuthenticated ? (
        <>
          <ul className="nav-links">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/add-product">Add Product</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/add-orders">Add Order</Link></li>
          </ul>
          <div className="auth-buttons">
            <Link to="/login" style={{background:"red"}}><button onClick={handleLogout}>Logout</button></Link>
          </div>
        </>
      ) : (
        <div className="auth-buttons">
          <Link to="/add-users">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

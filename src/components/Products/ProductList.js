import React, { useState, useEffect } from 'react';
import api, {setAuthToken} from '../../api';
import './ProductList.css';
import user1Image from '../../assets/images/user1.png';
import heroImg from "../../assets/images/heroimg.png";

const ProductList = () => {
  const [products , setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const token = process.env.REACT_APP_TOKEN;
  //     setAuthToken(token);
  //     const response = await api.get('/products');
  //     setProducts(response.data);
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <div className="product-page">
    <section className="product-details">
      <div className="product-title">
        <h1>Elegant Evening Gown</h1>
        <span className="product-status">In stock</span>
      </div>
      <div className="product-media">
        <img src={heroImg} alt="Elegant Evening Gown" className="main-image" />
      </div>
      <div className="product-info">
        <h2>Materials, Care and Origin</h2>
        <p>Fitted bodice, flowing skirt</p>
        <h2>Features</h2>
        <ul>
          <li>Distressed denim for a rugged look</li>
          <li>Button-front closure with vintage metal buttons</li>
          <li>Two chest pockets with buttoned flaps</li>
        </ul>
        <div className="product-price">
          <span>$89.99</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="available-sizes">
          <h2>Available Sizes</h2>
          <div className="sizes">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
          </div>
        </div>
        <div className="ratings-reviews">
          <h2>Ratings & Review</h2>
          <div className="rating">
            <span>4.8</span>
            <span>49 Ratings</span>
          </div>
          <div className="review-chart">
            <div className="review-bar">
              <span>5</span>
              <div className="bar"><div className="filled-bar" style={{ width: '80%' }}></div></div>
            </div>
            <div className="review-bar">
              <span>4</span>
              <div className="bar"><div className="filled-bar" style={{ width: '10%' }}></div></div>
            </div>
            {/* Add more review bars here */}
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default ProductList;

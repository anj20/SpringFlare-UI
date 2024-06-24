import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
// import featureImage1 from '../../assets/images/feature1.png';
// import featureImage2 from '../../assets/images/feature2.png';
// import featureImage3 from '../../assets/images/feature3.png';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Discover Unique Products with <h1 className="rainbow-text">SpringFlare</h1></h1>
        <p>Unveil the Latest Products and Transform Your Tech</p>
        <button className="explore-button"><Link to="/products">Get Started</Link></button>
      </section>
    </div>
  );
};

export default Home;

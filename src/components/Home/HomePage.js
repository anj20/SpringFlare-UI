import React from 'react';
import './HomePage.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to SpringFlare</h1>
        <p>Explore our latest collections and find your style.</p>
        <button className="explore-button">Explore Now</button>
      </section>
      {/* Additional sections or content for your home page */}
    </div>
  );
};

export default Home;

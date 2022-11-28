import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';

const Home = () => (
  <div className="Home" data-testid="Home">
    <Hero />
    <Features />
  </div>
);

export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';

const Home = () => (
  <div className="Home" data-testid="Home">
    <Hero />
    <Features />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';

const Main = () => (
  <div className="Main" data-testid="Main">
    <Hero />
    <Features />
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;

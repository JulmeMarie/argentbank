import React from 'react';
import PropTypes from 'prop-types';
import './Feature.css';

const Feature = (props) => (
  <div className="Feature feature-item" data-testid="Feature">
    <img src={props.src} alt="" className='feature-icon' />
    <h3 className="feature-item-title">{props.title}</h3>
    <p>{props.paragraph}</p>
  </div>
);

Feature.propTypes = {};

Feature.defaultProps = {};

export default Feature;

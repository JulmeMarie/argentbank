import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import logo from '../../img/argentBankLogo.png';

const Nav = () => (
  <nav className="Nav" data-testid="Nav">
    <a href="/"><img className='logo-img' src={logo} alt='logo' /></a>
    <a className='nav-item' href='/'><i className='fa fa-user-circle'></i> Sign In</a>
  </nav>
);

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;

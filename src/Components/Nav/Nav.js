import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import logo from '../../img/argentBankLogo.png';
import { Link } from 'react-router-dom';


const Nav = () => (
  <nav className="Nav main-nav" data-testid="Nav">
    <Link to="/" className='main-nav-logo'>
      <img className='main-nav-logo-image' src={logo} alt='Argent Bank Logo' />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <Link to='/signin' className='main-nav-item'><i className='fa fa-user-circle'></i> Sign In</Link>
  </nav>
);

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;

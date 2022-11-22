import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import logo from '../../img/argentBankLogo.png';
import { Link } from 'react-router-dom';


const Nav = () => (
  <nav className="Nav" data-testid="Nav">
    <Link to="/"><img className='logo-img' src={logo} alt='logo' /></Link>
    <Link to='/signin' className='nav-item'><i className='fa fa-user-circle'></i> Sign In</Link>
  </nav>
);

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;

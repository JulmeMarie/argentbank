import React from 'react';
import './Nav.css';
import logo from '../../img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/reducer';

const Nav = (props) => {
  return (
    <nav className="Nav main-nav" data-testid="Nav">
      <Link to="/" className='main-nav-logo'>
        <img className='main-nav-logo-image' src={logo} alt='Argent Bank Logo' />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {props.token &&
        <div>
          <Link to="/user" className="main-nav-item"> <i className="fa fa-user-circle"></i> {props.firstName} </Link>
          <Link to="/signin" className="main-nav-item">  <i className="fa fa-sign-out"></i>  Sign Out </Link>
        </div>
      }
      {!props.token &&
        <Link to='/signin' className='main-nav-item'><i className='fa fa-user-circle'></i> Sign In</Link>
      }
    </nav>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);

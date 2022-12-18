import React from 'react';
import './Nav.css';
import logo from '../../img/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/reducer';
import UserService from '../../services/UserService';

const Nav = (props) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    let service = new UserService();
    props.reset();
    service.removeTokenFromBrowser();
    navigate("/signin");
  }

  return (
    <nav className="Nav main-nav" data-testid="Nav">
      <Link to="/" className='main-nav-logo'>
        <img className='main-nav-logo-image' src={logo} alt='Argent Bank Logo' />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {props.token &&
        <div>
          <Link to="/user" className="main-nav-item"> <i className="fa fa-user-circle"></i> {props.firstName} </Link>
          <button className="main-nav-item" onClick={handleSignOut}>  <i className="fa fa-sign-out"></i>  Sign Out </button>
        </div>
      }
      {!props.token &&
        <Link to='/signin' className='main-nav-item'><i className='fa fa-user-circle'></i> Sign In</Link>
      }
    </nav>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);

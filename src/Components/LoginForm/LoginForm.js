import React from 'react';
import './LoginForm.css';

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/reducer';
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const service = new UserService();

  /**
   * Allows to handle the submition of the login form
   * @param {*} event 
   */

  const handleOnSubmit = (event) => {
    event.preventDefault();
    let form = document.getElementById("singin-form");
    let remember = document.getElementById("remember-me");

    service.loginUser(form).then(token => {
      props.setToken(token);
      if (remember.checked) {
        service.setTokenToBrowser(token);
      }
      navigate("/user");

    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <main className="LoginForm main bg-dark" data-testid="LoginForm">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form method="post" onSubmit={handleOnSubmit} id="singin-form">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label><input type="email" id="email" name="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label><input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" name="remember-me" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
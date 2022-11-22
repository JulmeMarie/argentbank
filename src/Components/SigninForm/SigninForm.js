import React from 'react';
import PropTypes from 'prop-types';
import './SigninForm.css';

const SigninForm = () => (
  <main className="SigninForm main bg-dark" data-testid="SigninForm">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label><input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label><input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  </main>

);

SigninForm.propTypes = {};

SigninForm.defaultProps = {};

export default SigninForm;
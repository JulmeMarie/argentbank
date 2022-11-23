import React from 'react';
import PropTypes from 'prop-types';
import './User.css';
import AccountList from '../AccountList/AccountList';
const User = () => (
  <div className="User main bg-dark" data-testid="User">
    <div className="header">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
    <AccountList />
  </div>
);

User.propTypes = {};

User.defaultProps = {};

export default User;

import React from 'react';
import PropTypes from 'prop-types';
import './Account.css';

const Account = (props) => {

  const compte = props.data;

  return (
    <div className="Account" data-testid="Account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
}

Account.propTypes = {};

Account.defaultProps = {};

export default Account;

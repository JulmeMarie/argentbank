import React from 'react';
import './Account.css';

const Account = (props) => {

  const compte = props.data;

  return (
    <div className="Account" data-testid="Account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{compte.name}</h3>
        <p className="account-amount">{compte.amount}</p>
        <p className="account-amount-description">{compte.avalability}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
}
export default Account;

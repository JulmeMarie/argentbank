import React from 'react';
import './AccountList.css';
import Account from '../Account/Account';

const AccountList = () => {

  const list = [
    {
      name: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      avalability: "Available Balance"
    },
    {
      name: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      avalability: "Available Balance"
    },
    {
      name: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      avalability: "Current Balance"
    },
  ]

  return (
    <div className="AccountList" data-testid="AccountList">
      {
        list.map((c, i) => {
          return <Account key={i} data={c} />
        })
      }
    </div>
  );
}
export default AccountList;

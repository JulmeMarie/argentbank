import React, { useEffect, useState } from 'react';
import './User.css';
import AccountList from '../AccountList/AccountList';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/reducer';
import UserService from '../../services/UserService';
import UserEditForm from '../UserEditForm/UserEditForm';

/**
 * This component displays the user profil
 * @param {*} props 
 * @returns 
 */
const User = (props) => {

  //Allows to know if the user edit form must be displayed
  const [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    let service = new UserService();

    service.getUser(props.token).then(user => {
      props.setFirstName(user.firstName);
      props.setLastName(user.lastName);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const toggleForm = (event) => {
    setDisplayForm(!displayForm);
  }

  return (
    <div className="User main bg-dark" data-testid="User">
      <div className="header">
        <h1>Welcome back
          <br />{!displayForm && props.firstName + " " + props.lastName + " !"}
        </h1>
        {!displayForm && <button className="edit-button" onClick={toggleForm}>Edit Name</button>}
        {displayForm && <UserEditForm toggleForm={toggleForm} />}
      </div>
      <AccountList />
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(User);

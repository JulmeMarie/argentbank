import React from 'react';
import './UserEditForm.css';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/reducer';
import UserService from '../../services/UserService';
/**
 * This component allows to edit user firstname and lastname
 * @param {*} props 
 * @returns 
 */
const UserEditForm = (props) => {

  const handleSubmitForm = (event) => {
    event.preventDefault();

    let form = document.getElementById("user-edit-form");
    let service = new UserService();

    service.updateUser(props.token, form).then(user => {
      props.setFirstName(user.firstName);
      props.setLastName(user.lastName);
      props.toggleForm();
    }).catch(error => {
      console.log(error);
    });

  }

  return (
    <div className="UserEditForm" data-testid="UserEditForm">
      <form method='POST' onSubmit={handleSubmitForm} id="user-edit-form">
        <div>
          <input type="text" name="firstName" placeholder={props.firstName} defaultValue={props.firstName} />
          <input type="text" name="lastName" placeholder={props.lastName} defaultValue={props.lastName} />
        </div>
        <div>
          <button type='submit'>save</button>
          <button type='reset' onClick={props.toggleForm}>cancel</button>
        </div>

      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);

import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/reducer";

const Form = (props) => {

  const handleClick = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;

    props.update(name);
  }

  return (
    <div className="Form" data-testid="Form">
      <form action='#' onSubmit={handleClick}>
        <input type="name" id="name" />
        <input type="submit" value="OK" />
      </form>
      {props.name && "Votre prénom : " + props.name}
    </div>
  );
}

Form.propTypes = {};

Form.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

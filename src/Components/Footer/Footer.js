import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/reducer";

const Footer = (props) => {

  return (
    <footer className="Footer" data-testid="Footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

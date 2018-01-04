import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => (
  <article className="message is-danger">
    <div className="message-body">
      Error: {props.text}
    </div>
  </article>
);

ErrorMessage.propTypes = {
  text: PropTypes.string
}


export default ErrorMessage;

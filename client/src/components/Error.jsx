import React from 'react';
import PropTypes from 'prop-types';

const Error = props => {
  const { error, inputId } = props;

  if (!error) return null;
  return <label htmlFor={inputId}>{error}</label>;
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired
};

export default Error;

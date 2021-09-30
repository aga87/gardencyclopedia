import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Spinner = props => {
  const { isLoading } = props;

  if (!isLoading) return null;
  return <Icon name="spinner" />;
};

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Spinner;

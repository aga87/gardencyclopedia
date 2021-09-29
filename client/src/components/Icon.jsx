import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Icon = props => {
  const { name } = props;

  if (name === 'menu') return <FontAwesomeIcon icon={faBars} />;
  if (name === 'plus') return <FontAwesomeIcon icon={faPlus} />;
  if (name === 'spinner') return <FontAwesomeIcon icon={faSpinner} spin />;
  return null;
};

Icon.propTypes = {
  name: PropTypes.oneOf(['menu', 'plus', 'spinner']).isRequired
};

export default Icon;

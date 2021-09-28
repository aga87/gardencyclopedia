import React from 'react';
import PropTypes from 'prop-types';

const Btn = props => {
  const { text, icon, handleClick } = props;

  return (
    <button type="button" onClick={handleClick}>
      {icon}
      {text}
    </button>
  );
};

Btn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.node
};

Btn.defaultProps = {
  text: '',
  icon: null
};

export default Btn;

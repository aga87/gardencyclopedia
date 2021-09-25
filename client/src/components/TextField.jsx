import React from 'react';
import PropTypes from 'prop-types';

const TextField = props => {
  const { id, label, value, maxLength, handleChange, required } = props;

  return (
    <p>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        size="30"
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </p>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

TextField.defaultProps = {
  required: false
};

export default TextField;

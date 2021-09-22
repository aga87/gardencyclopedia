import React from 'react';
import PropTypes from 'prop-types';

const SelectField = props => {
  const { id, label, options, placeholder, value, handleChange, required } =
    props;

  const selectOptions = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <p>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <select id={id} required={required} value={value} onChange={handleChange}>
        <option value="defaultValue">{placeholder}</option>
        {selectOptions}
      </select>
    </p>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

SelectField.defaultProps = {
  value: '', // FIXME:
  required: false
};

export default SelectField;

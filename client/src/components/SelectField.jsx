import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../utils/text-utils';

const SelectField = props => {
  const { id, label, options, placeholder, value, handleChange, required } =
    props;

  const selectOptions = options.map(option => (
    <option key={option} value={option}>
      {capitalize(option)}
    </option>
  ));

  return (
    <p>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <select id={id} required={required} value={value} onChange={handleChange}>
        {placeholder && <option value="">{placeholder}</option>}
        {selectOptions}
      </select>
    </p>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string
};

SelectField.defaultProps = {
  required: false,
  placeholder: ''
};

export default SelectField;

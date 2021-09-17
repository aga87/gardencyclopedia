import React from 'react';
import PropTypes from 'prop-types';

const SelectField = props => {
  const { id, label, options, selectedOption, value, handleChange, required } =
    props;

  const selectOptions = options.map(option => (
    <option key={option}>{option}</option>
  ));

  return (
    <p>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <select id={id} required={required} value={value} onChange={handleChange}>
        <option value="defaultValue">{selectedOption}</option>
        {selectOptions}
      </select>
    </p>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

SelectField.defaultProps = {
  required: false
};

export default SelectField;

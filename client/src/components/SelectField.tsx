import React from 'react';
import { capitalize } from '../utils/text-utils';
import Label from './Label';

type SelectFieldProps = {
  inputId: string;
  label: string;
  options: string[];
  placeholder?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
};

const SelectField = ({
  inputId,
  label,
  options,
  placeholder = '',
  value,
  handleChange,
  required = false
}: SelectFieldProps): JSX.Element => {
  const selectOptions = options.map(option => (
    <option key={option} value={option}>
      {capitalize(option)}
    </option>
  ));

  return (
    <div>
      <Label label={label} inputId={inputId} required={required} />
      <select
        id={inputId}
        required={required}
        value={value}
        onChange={handleChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {selectOptions}
      </select>
    </div>
  );
};

export default SelectField;

import React from 'react';
import { capitalize } from '../utils/text-utils';

type SelectProps = {
  id: string;
  options: string[];
  placeholder?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  id,
  options,
  placeholder = '',
  value,
  handleChange
}: SelectProps): JSX.Element => {
  const selectOptions = options.map(option => (
    <option key={option} value={option}>
      {capitalize(option)}
    </option>
  ));

  return (
    <select id={id} value={value} onChange={handleChange}>
      {placeholder && <option value="">{placeholder}</option>}
      {selectOptions}
    </select>
  );
};

export default Select;

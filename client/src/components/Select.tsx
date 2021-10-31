import React from 'react';
import { capitalize } from '../utils/text-utils';

type SelectProps = {
  variant?: 'primary' | 'filter' | 'sort';
  options: string[];
  placeholder?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  ariaLabel?: string;
};

const Select = ({
  variant = 'primary',
  options,
  placeholder = '',
  value,
  handleChange,
  ariaLabel = ''
}: SelectProps): JSX.Element => {
  let className = 'select';
  if (variant !== 'primary') {
    className = `select select--custom select--${variant}`;
  }

  const selectOptions = options.map(option => (
    <option key={option} value={option}>
      {capitalize(option)}
    </option>
  ));

  return (
    <select
      value={value}
      onChange={handleChange}
      aria-label={ariaLabel}
      className={className}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {selectOptions}
    </select>
  );
};

export default Select;

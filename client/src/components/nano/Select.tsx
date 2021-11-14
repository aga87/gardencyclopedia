import React from 'react';
import { capitalize } from '../../utils/text-utils';

type SelectProps = {
  variant?: 'primary' | 'sort';
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
    className = `select select--${variant}`;
  }

  const selectOptions = options.map(option => (
    <option key={option} value={option} className='select__option'>
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
      {placeholder && (
        <option value='' className='select__placeholder'>
          {placeholder}
        </option>
      )}
      {selectOptions}
    </select>
  );
};

export default Select;

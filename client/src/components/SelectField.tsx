import React from 'react';
import { capitalize } from '../utils/text-utils';
import Label from './nano/Label';
import Error from './nano/Error';

type SelectFieldProps = {
  inputId: string;
  label: string;
  options: string[];
  placeholder?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  errorId: string;
  errorMsg: string;
};

const SelectField = ({
  inputId,
  label,
  options,
  placeholder = '',
  value,
  handleChange,
  required = false,
  errorId,
  errorMsg
}: SelectFieldProps): JSX.Element => {
  const selectOptions = options.map(option => (
    <option key={option} value={option}>
      {capitalize(option)}
    </option>
  ));

  return (
    <div className='c-select-field'>
      <Label label={label} inputId={inputId} required={required} />
      <select
        className='c-select-field__select'
        id={inputId}
        required={required}
        value={value}
        onChange={handleChange}
        aria-describedby={errorId}
      >
        {placeholder && <option value=''>{placeholder}</option>}
        {selectOptions}
      </select>
      <Error id={errorId} msg={errorMsg} />
    </div>
  );
};

export default SelectField;

import React from 'react';

type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  maxLength: number;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  id,
  label,
  value,
  maxLength,
  required = false,
  handleChange
}: TextFieldProps): JSX.Element => (
  <p>
    <label htmlFor={id}>
      {label}
      {required && <span aria-hidden="true"> *</span>}
    </label>
    <input
      id={id}
      type="text"
      size={30}
      maxLength={maxLength}
      value={value}
      onChange={handleChange}
      required={required}
    />
  </p>
);

export default TextField;

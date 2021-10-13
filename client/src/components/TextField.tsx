import React from 'react';

type TextFieldProps = {
  inputId: string;
  label: string;
  value: string;
  maxLength: number;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  inputId,
  label,
  value,
  maxLength,
  required = false,
  handleChange
}: TextFieldProps): JSX.Element => (
  <p>
    <label htmlFor={inputId}>
      {label}
      {required && <span aria-hidden="true"> *</span>}
    </label>
    <input
      id={inputId}
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

import React from 'react';

type TextFieldProps = {
  inputId: string;
  label: string;
  variant?: 'text' | 'email' | 'password';
  value: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  inputId,
  label,
  variant = 'text',
  value,
  minLength = 0,
  maxLength,
  required = false,
  handleChange
}: TextFieldProps): JSX.Element => (
  <p>
    <label htmlFor={inputId} className="label">
      {label}
      {required && (
        <span className="label__asterisk" aria-hidden="true">
          {' '}
          *
        </span>
      )}
    </label>
    <input
      id={inputId}
      type={variant}
      size={30}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      onChange={handleChange}
      required={required}
    />
  </p>
);

export default TextField;

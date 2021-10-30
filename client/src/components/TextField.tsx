import React from 'react';
import Label from './Label';

type TextFieldProps = {
  inputId: string;
  label: string;
  variant?: 'text' | 'email' | 'password';
  value: string;
  maxLength: number;
  minLength?: number;
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
  <div>
    <Label label={label} inputId={inputId} required={required} />
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
  </div>
);

export default TextField;

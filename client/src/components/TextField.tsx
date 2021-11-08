import React from 'react';
import Label from './Label';
import Error from './nano/Error';

type TextFieldProps = {
  inputId: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  maxLength: number;
  minLength?: number;
  required?: boolean;
  errorId: string;
  errorMsg: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  inputId,
  label,
  type = 'text',
  value,
  minLength = 0,
  maxLength,
  required = false,
  errorId,
  errorMsg,
  handleChange
}: TextFieldProps): JSX.Element => (
  <div>
    <Label label={label} inputId={inputId} required={required} />
    <input
      className='input'
      id={inputId}
      type={type}
      size={30}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      onChange={handleChange}
      required={required}
      aria-describedby={errorId}
    />
    <Error id={errorId} msg={errorMsg} />
  </div>
);

export default TextField;

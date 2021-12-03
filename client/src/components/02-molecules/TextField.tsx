import React, { useRef } from 'react';
import Label from '../01-atoms/Label';
import Error from '../01-atoms/Error';

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

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
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
    }: TextFieldProps,
    ref
  ): JSX.Element => {
    const localInputRef = useRef<HTMLInputElement>(null);
    const inputRef = ref || localInputRef; // use local ref if ref not supplied

    return (
      <div>
        <Label label={label} inputId={inputId} required={required} />
        <input
          ref={inputRef}
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
  }
);

export default TextField;

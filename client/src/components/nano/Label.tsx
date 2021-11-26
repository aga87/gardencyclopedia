import React from 'react';

export type LabelProps = {
  label: string;
  inputId: string;
  required?: boolean;
};

const Label = ({
  label,
  inputId,
  required = false
}: LabelProps): JSX.Element => (
  <label htmlFor={inputId} className='label'>
    {label}
    {required && (
      <span className='label__asterisk' aria-hidden='true'>
        {' '}
        *
      </span>
    )}
  </label>
);

export default Label;

import React from 'react';

type ErrorProps = {
  inputId: string;
  error: string;
};

const Error = ({ inputId, error }: ErrorProps): JSX.Element | null => {
  if (!error) return null;
  return (
    <label htmlFor={inputId} className="error s1">
      {error}
    </label>
  );
};

export default Error;

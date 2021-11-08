import React from 'react';

type ErrorProps = {
  id?: string;
  msg: string;
  variant?: 'primary' | 'server';
};

const Error = ({
  id = '',
  msg,
  variant = 'primary'
}: ErrorProps): JSX.Element | null => {
  if (!msg) return null;
  return (
    <p id={id} className={variant === 'primary' ? 'error s1' : 'error-server'}>
      {msg}
    </p>
  );
};

export default Error;

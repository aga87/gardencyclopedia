import React from 'react';

export type ErrorProps = {
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
    <p
      id={id}
      role='alert'
      className={variant === 'primary' ? 'error' : 'error-server'}
    >
      {msg}
    </p>
  );
};

export default Error;

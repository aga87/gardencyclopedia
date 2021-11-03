import React from 'react';

type ErrorProps = {
  id?: string;
  msg: string;
  variant?: 'client' | 'server';
};

const Error = ({
  id = '',
  msg,
  variant = 'client'
}: ErrorProps): JSX.Element | null => {
  if (!msg) return null;
  return (
    <p id={id} className={variant === 'client' ? 'error s1' : 'error-server'}>
      {msg}
    </p>
  );
};

export default Error;

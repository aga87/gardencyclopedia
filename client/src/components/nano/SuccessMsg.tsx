import React from 'react';

export type SuccessMsgProps = {
  msg: string;
};

const SuccessMsg = ({ msg }: SuccessMsgProps): JSX.Element | null => {
  if (!msg) return null;
  return <p className='success-msg'>{msg}</p>;
};

export default SuccessMsg;

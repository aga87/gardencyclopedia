import React from 'react';

type SuccessMsgProps = {
  msg: string;
};

const SuccessMsg = ({ msg }: SuccessMsgProps): JSX.Element | null => {
  if (!msg) return null;
  return <p className='success-msg'>{msg}</p>;
};

export default SuccessMsg;

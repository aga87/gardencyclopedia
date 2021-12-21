import React from 'react';

type SuccessMsgProps = {
  msg: string;
};

const SuccessMsg = ({ msg }: SuccessMsgProps): JSX.Element => (
  <p className='success-msg' role='status'>{msg}</p>
);

export default SuccessMsg;

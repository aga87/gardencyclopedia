import React from 'react';
import { useAppSelector } from '../../redux/typed-hooks';
import { selectStatusMsg } from '../../redux/reducers/index';
import useVisibilityTimeout from '../../hooks/useVisibilityTimeout';

const StatusMessage = (): JSX.Element | null => {
  const statusMsg = useAppSelector(selectStatusMsg);
  const isVisible = useVisibilityTimeout(3000, statusMsg.id);

  if (!statusMsg.msg) return null;
  if (!isVisible) return null;
  return (
    <p role='status' className='m-status-message'>
      {statusMsg.msg}
    </p>
  );
};

export default StatusMessage;

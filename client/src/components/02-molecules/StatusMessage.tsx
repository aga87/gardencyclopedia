import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/typed-hooks';
import { selectStatusMsg } from '../../redux/reducers/index';

const StatusMessage = (): JSX.Element | null => {
  const statusMsg = useAppSelector(selectStatusMsg);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => {
      clearTimeout(timeId);
      setIsVisible(true);
    };
  }, [statusMsg.id]);

  if (!statusMsg.msg) return null;
  if (!isVisible) return null;
  return (
    <p role='status' className='m-status-message'>
      {statusMsg.msg}
    </p>
  );
};

export default StatusMessage;

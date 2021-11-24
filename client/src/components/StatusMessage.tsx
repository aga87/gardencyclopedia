import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectStatusMsg } from '../redux/reducers/index';

const StatusMessage = (): JSX.Element | null => {
  const statusMsg = useSelector(selectStatusMsg);
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
    <p role='status' className='status-message'>
      {statusMsg.msg}
    </p>
  );
};

export default StatusMessage;

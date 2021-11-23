import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions/uiActions';

const useModalClose = () => {
  const dispatch = useDispatch();

  const handleCloseModalClick = () => {
    dispatch(closeModal());
  };

  const handleCloseModal = (e: KeyboardEvent): void => {
    const { key } = e;
    switch (key) {
      case 'Escape':
        dispatch(closeModal());
        break;
      default:
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
  }, []);

  return { handleCloseModalClick };
};

export default useModalClose;

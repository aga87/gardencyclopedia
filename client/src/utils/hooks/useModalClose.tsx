import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/store';
import { closeModal } from '../../redux/actions/uiActions';

type ReturnType = {
  handleCloseModalClick: () => void;
};

const useModalClose = (): ReturnType => {
  const dispatch = useAppDispatch();

  const handleCloseModalClick = () => {
    dispatch(closeModal());
  };

  const handleCloseModal = (e: KeyboardEvent): void => {
    const { key } = e;
    switch (key) {
      case 'Escape':
        e.preventDefault();
        dispatch(closeModal());
        break;
      default:
    }
  };

  // Element that triggered the modal
  const activeElement = document.activeElement as HTMLButtonElement;

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
      // If the element that triggered the modal is still in the DOM, restore focus
      if (activeElement) {
        activeElement.focus();
      }
    };
  }, [activeElement]);

  return { handleCloseModalClick };
};

export default useModalClose;

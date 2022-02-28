import { useAppDispatch } from '../redux/typed-hooks';
import { closeModal } from '../redux/actions/uiActions';
import useCloseOnEscapeKeyDown from './useCloseOnEscapeKeyDown';

type ReturnType = {
  handleCloseModalClick: () => void;
};

const useCloseModal = (): ReturnType => {
  const dispatch = useAppDispatch();

  const handleCloseModalClick = () => {
    dispatch(closeModal());
  };

  useCloseOnEscapeKeyDown(() => dispatch(closeModal()));

  return { handleCloseModalClick };
};

export default useCloseModal;

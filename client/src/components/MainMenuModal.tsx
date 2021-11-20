import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/actions/uiActions';
import MainMenu from './MainMenu';
import Modal from './Modal';

const MainMenuModal = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      variant='secondary'
      title='Main Menu'
      id='main-menu-modal-id'
      handleClose={handleCloseModal}
    >
      <MainMenu />
    </Modal>
  );
};

export default MainMenuModal;

import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import Modal from '../02-molecules/Modal/Modal';
import MainMenu from './MainMenu';

const MainMenuModal = (): JSX.Element => {
  const { handleCloseModalClick } = useCloseModal();

  return (
    <Modal
      variant='secondary'
      title='Main Menu'
      id='main-menu-modal-id'
      handleClose={handleCloseModalClick}
    >
      <MainMenu />
    </Modal>
  );
};

export default MainMenuModal;

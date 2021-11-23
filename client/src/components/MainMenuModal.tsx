import React from 'react';
import useModalClose from '../utils/hooks/useModalClose';
import MainMenu from './MainMenu';
import Modal from './Modal';

const MainMenuModal = (): JSX.Element => {
  const { handleCloseModalClick } = useModalClose();

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

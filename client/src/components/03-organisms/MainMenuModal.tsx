import React from 'react';
import useModalClose from '../../utils/hooks/useModalClose';
import Modal from '../02-molecules/Modal';
import MainMenu from './MainMenu';

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

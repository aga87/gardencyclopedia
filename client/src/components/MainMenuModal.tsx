import React from 'react';
import MainMenu from './Menus/MainMenu';
import Modal from './Modal';

const MainMenuModal = (): JSX.Element => (
  <Modal variant="narrow" title="Main Menu">
    <MainMenu />
  </Modal>
);

export default MainMenuModal;

import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/actions/uiActions';
import Modal from './Modal';
import UpcomingFeatures from './UpcomingFeatures';

const UserSettingsModal = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal title='User settings' handleClose={handleCloseModal}>
      <UpcomingFeatures
        features={[
          'Email verification with OAuth2.',
          'Update user email.',
          'Update user password.',
          'Delete account.'
        ]}
      />
    </Modal>
  );
};

export default UserSettingsModal;

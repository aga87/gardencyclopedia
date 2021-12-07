import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import Modal from '../02-molecules/Modal';
import UpcomingFeatures from '../02-molecules/UpcomingFeatures';

const UserSettingsModal = (): JSX.Element => {
  const { handleCloseModalClick } = useCloseModal();

  return (
    <Modal
      title='User settings'
      id='user-settings-modal-id'
      handleClose={handleCloseModalClick}
    >
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

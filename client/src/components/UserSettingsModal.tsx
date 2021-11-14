import React from 'react';
import Modal from './Modal';
import UpcomingFeatures from './UpcomingFeatures';

const UserSettingsModal = (): JSX.Element => (
  <Modal title='User settings'>
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

export default UserSettingsModal;

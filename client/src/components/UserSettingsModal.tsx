import React from 'react';
import Modal from './Modal';
import UpcomingFeatures from './UpcomingFeatures';

const UserSettingsModal = (): JSX.Element => (
  <Modal title='User settings'>
    <UpcomingFeatures
      features={[
        'User authentication with OAuth.',
        'Update user email.',
        'Update user password.',
        'Change username.'
      ]}
    />
  </Modal>
);

export default UserSettingsModal;

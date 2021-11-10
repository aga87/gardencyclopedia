import React from 'react';
import Modal from './Modal';

const UserSettingsModal = (): JSX.Element => {
  const upcomingFeatures = [
    'User authentication with OAuth.',
    'Change user email.',
    'Change user password.',
    'Change user name.'
  ];

  const upcomingFeaturesListItems = upcomingFeatures.map(feature => (
    <li>{feature}</li>
  ));

  return (
    <Modal title='User settings'>
      <p>Coming soon:</p>
      <ul>{upcomingFeaturesListItems}</ul>
    </Modal>
  );
};

export default UserSettingsModal;

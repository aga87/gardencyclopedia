import React from 'react';
import Modal from './Modal';
import PlantForm from './PlantForm';

type PlantModalProps = {
  variant: 'add' | 'edit';
};

const PlantModal = ({ variant }: PlantModalProps): JSX.Element => (
  <Modal title={variant === 'add' ? 'New Plant' : 'Edit Plant'}>
    <PlantForm />
  </Modal>
);

export default PlantModal;

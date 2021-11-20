import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/actions/uiActions';
import Modal from './Modal';
import PlantForm from './PlantForm';

type PlantModalProps = {
  variant: 'add' | 'edit';
};

const PlantModal = ({ variant }: PlantModalProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      title={variant === 'add' ? 'New Plant' : 'Edit Plant'}
      id={variant === 'add' ? 'add-plant-modal-id' : 'edit-plant-modal-id'}
      handleClose={handleCloseModal}
    >
      <PlantForm />
    </Modal>
  );
};

export default PlantModal;

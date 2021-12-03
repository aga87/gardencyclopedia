import React from 'react';
import useModalClose from '../../utils/hooks/useModalClose';
import Modal from '../02-molecules/Modal';
import PlantForm from './forms/PlantForm';

type PlantFormModalProps = {
  variant: 'add' | 'edit';
};

const PlantFormModal = ({ variant }: PlantFormModalProps): JSX.Element => {
  const { handleCloseModalClick } = useModalClose();

  return (
    <Modal
      title={variant === 'add' ? 'New Plant' : 'Edit Plant'}
      id={variant === 'add' ? 'add-plant-modal-id' : 'edit-plant-modal-id'}
      handleClose={handleCloseModalClick}
    >
      <PlantForm />
    </Modal>
  );
};

export default PlantFormModal;

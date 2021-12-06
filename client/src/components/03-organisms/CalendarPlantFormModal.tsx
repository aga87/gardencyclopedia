import React from 'react';
import useModalClose from '../../hooks/useModalClose';
import Modal from '../02-molecules/Modal';
import CalendarPlantForm from './CalendarPlantForm';

type CalendarPlantFormModalProps = {
  variant: 'add' | 'edit';
};

const CalendarPlantFormModal = ({
  variant
}: CalendarPlantFormModalProps): JSX.Element => {
  const { handleCloseModalClick } = useModalClose();

  return (
    <Modal
      title={variant === 'add' ? 'New Plant' : 'Edit Plant'}
      id={variant === 'add' ? 'add-plant-modal-id' : 'edit-plant-modal-id'}
      handleClose={handleCloseModalClick}
    >
      <CalendarPlantForm />
    </Modal>
  );
};

export default CalendarPlantFormModal;

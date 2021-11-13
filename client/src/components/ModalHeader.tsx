import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/actions/uiActions';
import IconButton from './IconButton';
import Icon from './nano/Icon';

type ModalHeaderProps = {
  title: string;
};

const ModalHeader = ({ title }: ModalHeaderProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <header className='c-modal-header l-modal-header'>
      <IconButton
        icon={<Icon name='close' />}
        ariaLabel={`Close ${title}`}
        handleClick={handleCloseModal}
      />
      <h2 className='c-modal-header__title l-modal-header__title'>{title}</h2>
    </header>
  );
};

export default ModalHeader;

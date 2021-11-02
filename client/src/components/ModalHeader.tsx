import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/actions/uiActions';
import Btn from './Btn';
import Icon from './Icon';

type ModalHeaderProps = {
  title: string;
};

const ModalHeader = ({ title }: ModalHeaderProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <header className="c-modal-header l-modal-header">
      <Btn icon={<Icon name="close" />} handleClick={handleCloseModal} />
      <h2 className="l-modal-header__title t6">{title}</h2>
    </header>
  );
};

export default ModalHeader;

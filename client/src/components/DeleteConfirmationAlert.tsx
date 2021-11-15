import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import Button from './nano/Button';
import Icon from './nano/Icon';

type DeleteConfirmationAlertProps = {
  itemName: string;
  handleCancel: () => void;
  handleDelete: () => void;
};

const DeleteConfirmationAlert = ({
  itemName,
  handleCancel,
  handleDelete
}: DeleteConfirmationAlertProps): JSX.Element => {
  // Modal portal
  const modalEl = document.querySelector('#modal');

  const Alert = (
    <div className='c-alert l-alert'>
      <div className='c-alert__content l-alert__content'>
        <header className='c-alert__header'>
          <h2 className='c-alert__title'>Confirm deletion</h2>
        </header>
        <div className='c-alert__body'>
          <p className='c-alert__msg'>
            Are you sure you want to delete{' '}
            <span className='c-alert__item-name'>{itemName}</span> ?<br />
            The action cannot be undone.
          </p>
          <ul className='l-alert__btn-group'>
            <li className='l-alert__btn-group-item'>
              <Button
                variant='secondary'
                text='Cancel'
                handleClick={handleCancel}
              />
            </li>
            <li className='l-alert__btn-group-item'>
              <Button
                variant='tertiary'
                icon={<Icon name='trash' />}
                text='Delete'
                handleClick={handleDelete}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  if (modalEl) return createPortal(Alert, modalEl);
  return Alert;
};

export default DeleteConfirmationAlert;

import React from 'react';
import { createPortal } from 'react-dom';
import useAlertKeyboardSupport from '../utils/hooks/useAlertKeyboardSupport';
import Button from './nano/Button';
import Icon from './nano/Icon';

type ConfirmDeletionAlertProps = {
  itemName: string;
  id: string;
  handleCancel: () => void;
  handleDelete: () => void;
};

const ConfirmDeletionAlert = ({
  itemName,
  id,
  handleCancel,
  handleDelete
}: ConfirmDeletionAlertProps): JSX.Element => {
  const modalActions = ['cancel', 'delete'];
  const { refs, handleKeyDown } = useAlertKeyboardSupport(
    modalActions,
    handleCancel
  );
  // Modal portal
  const modalEl = document.querySelector('#modal');

  const Alert = (
    <div
      className='c-alert l-alert'
      role='alertdialog'
      aria-modal
      aria-labelledby={id}
      aria-describedby={`${id}-content`}
    >
      <div className='c-alert__content l-alert__content'>
        <header className='c-alert__header' id={id}>
          <h2 className='c-alert__title'>Confirm deletion</h2>
        </header>
        <div className='c-alert__body'>
          <p className='c-alert__msg' id={`${id}-content`}>
            Are you sure you want to delete{' '}
            <span className='c-alert__item-name'>{itemName}</span> ?<br />
            The action cannot be undone.
          </p>
          <ul role='presentation' className='l-alert__btn-group'>
            <li className='l-alert__btn-group-item'>
              <Button
                ref={ref => {
                  refs.current[0] = ref;
                }}
                variant='secondary'
                text='Cancel'
                handleClick={handleCancel}
                handleKeyDown={handleKeyDown}
              />
            </li>
            <li className='l-alert__btn-group-item'>
              <Button
                ref={ref => {
                  refs.current[1] = ref;
                }}
                variant='tertiary'
                icon={<Icon name='trash' />}
                text='Delete'
                handleClick={handleDelete}
                handleKeyDown={handleKeyDown}
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

export default ConfirmDeletionAlert;

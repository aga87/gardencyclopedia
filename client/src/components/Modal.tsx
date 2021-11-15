import React from 'react';
import IconButton from './nano/IconButton';
import Icon from './nano/Icon';

type ModalProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  handleClose: () => void;
};

/* eslint react/prop-types: 0 */
const Modal: React.FC<ModalProps> = ({
  variant = 'primary',
  title,
  children,
  handleClose
}): JSX.Element => {
  let contentClass = 'c-modal__content l-modal__content';
  if (variant !== 'primary') {
    contentClass = `${contentClass} l-modal__content--${variant}`;
  }

  return (
    <div className='c-modal l-modal'>
      <div className={contentClass}>
        <div className='l-modal__header'>
          <header className='c-modal__header'>
            <div className='l-modal__header-flex'>
              <IconButton
                icon={<Icon name='close' />}
                ariaLabel={`Close ${title}`}
                handleClick={handleClose}
              />
              <h2 className='c-modal__title l-modal__title'>{title}</h2>
            </div>
          </header>
        </div>
        <section className={variant === 'primary' ? 'c-modal__children' : ''}>
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;

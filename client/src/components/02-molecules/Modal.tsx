import React from 'react';
import IconButton from '../01-atoms/buttons/IconButton';

type ModalProps = {
  variant?: 'primary' | 'secondary';
  title: string;
  id: string; // for accessibility
  handleClose: () => void;
};

/* eslint react/prop-types: 0 */
const Modal: React.FC<ModalProps> = ({
  variant = 'primary',
  title,
  id,
  children,
  handleClose
}) => {
  let contentClass = 'm-modal__content l-modal__content';
  if (variant !== 'primary') {
    contentClass = `${contentClass} l-modal__content--${variant}`;
  }

  return (
    <div
      className='m-modal l-modal'
      role='dialog'
      aria-modal
      aria-labelledby={id}
      aria-describedby={`${id}-content`}
    >
      <div className={contentClass}>
        <div className='l-modal__header'>
          <header className='m-modal__header'>
            <div className='l-modal__header-flex'>
              <IconButton
                iconName='close'
                ariaLabel={`Close ${title}`}
                handleClick={handleClose}
              />
              <h2 className='m-modal__title l-modal__title' id={id}>
                {title}
              </h2>
            </div>
          </header>
        </div>
        <section
          id={`${id}-content`}
          className={variant === 'primary' ? 'm-modal__children' : ''}
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;

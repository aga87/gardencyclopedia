import React from 'react';
import IconButton from './nano/buttons/IconButton';

type ModalProps = {
  title: string;
  id: string; // for accessibility
  variant?: 'primary' | 'secondary';
  handleClose: () => void;
};

/* eslint react/prop-types: 0 */
const Modal: React.FC<ModalProps> = ({
  variant = 'primary',
  title,
  id,
  children,
  handleClose
}): JSX.Element => {
  let contentClass = 'c-modal__content l-modal__content';
  if (variant !== 'primary') {
    contentClass = `${contentClass} l-modal__content--${variant}`;
  }

  return (
    <div
      className='c-modal l-modal'
      role='dialog'
      aria-modal
      aria-labelledby={id}
      aria-describedby={`${id}-content`}
    >
      <div className={contentClass}>
        <div className='l-modal__header'>
          <header className='c-modal__header'>
            <div className='l-modal__header-flex'>
              <IconButton
                iconName='close'
                ariaLabel={`Close ${title}`}
                handleClick={handleClose}
              />
              <h2 className='c-modal__title l-modal__title' id={id}>
                {title}
              </h2>
            </div>
          </header>
        </div>
        <section
          id={`${id}-content`}
          className={variant === 'primary' ? 'c-modal__children' : ''}
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;

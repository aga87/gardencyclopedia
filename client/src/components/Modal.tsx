import React from 'react';
import ModalHeader from './ModalHeader';

type ModalProps = {
  title: string;
  variant?: 'primary' | 'narrow';
};

/* eslint react/prop-types: 0 */
const Modal: React.FC<ModalProps> = ({
  variant = 'primary',
  title,
  children
}): JSX.Element => {
  let contentClass = 'c-modal__content l-modal__content';
  if (variant !== 'primary') {
    contentClass = `${contentClass} l-modal__content--${variant}`;
  }

  return (
    <section className="c-modal l-modal">
      <div className={contentClass}>
        <div className="l-modal__header">
          <ModalHeader title={title} />
        </div>
        <div className={variant === 'primary' ? 'l-modal__children' : ''}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Modal;

import React from 'react';

type BtnProps = {
  variant?: '' | 'secondary' | 'dropdown';
  text?: string;
  icon?: React.ReactNode;
  handleClick: () => void;
};

const Btn = ({
  variant = '',
  text = '',
  icon = null,
  handleClick
}: BtnProps): JSX.Element => {
  const className = (() => {
    switch (variant) {
      case 'secondary':
        return 'menu-btn menu-btn--secondary';
      case 'dropdown':
        return 'menu-dropdown-btn';
      default:
        return 'menu-btn';
    }
  })();

  return (
    <button type='button' onClick={handleClick} className={className}>
      {icon && (
        <span className={text ? 'menu-dropdown-btn__icon' : ''}>{icon}</span>
      )}
      {text}
    </button>
  );
};

export default Btn;

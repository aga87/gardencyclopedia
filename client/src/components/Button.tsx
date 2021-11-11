import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'dropdown' | 'tertiary';
  text: string;
  icon?: React.ReactNode;
  handleClick: () => void;
};

const Button = ({
  variant = 'primary',
  text,
  icon = null,
  handleClick
}: ButtonProps): JSX.Element => {
  let className = 'btn';
  if (variant === 'tertiary') {
    className = 'btn btn--tertiary';
  }
  if (variant === 'dropdown') {
    className = 'btn-dropdown';
  }

  let iconClassName = '';
  if (text) {
    if (variant === 'primary' || variant === 'tertiary') {
      iconClassName = 'btn__icon';
    } else if (variant === 'dropdown') {
      iconClassName = 'btn-dropdown__icon';
    }
  }

  return (
    <button type='button' onClick={handleClick} className={className}>
      {icon && <span className={iconClassName}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;

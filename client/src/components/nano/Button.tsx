import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'block';
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
  let className = 'button';
  if (variant !== 'block') {
    className = `${className} ${className}--${variant}`;
  } else if (variant === 'block') {
    className = 'block-button';
  }

  let iconClassName = '';
  if (variant !== 'block') {
    iconClassName = 'button__icon';
  } else if (variant === 'block') {
    iconClassName = 'block-button__icon';
  }

  return (
    <button type='button' onClick={handleClick} className={className}>
      {icon && <span className={iconClassName}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;

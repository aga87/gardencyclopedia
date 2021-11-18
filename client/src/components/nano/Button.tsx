import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
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
  if (variant !== 'primary') {
    className = `${className} ${className}--${variant}`;
  }

  return (
    <button type='button' onClick={handleClick} className={className}>
      {icon && <span className='button__icon'>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;

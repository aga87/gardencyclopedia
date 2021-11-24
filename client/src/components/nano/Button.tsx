import React, { useRef } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  text: string;
  icon?: React.ReactNode;
  handleClick: () => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      text,
      icon = null,
      handleClick,
      handleKeyDown
    }: ButtonProps,
    ref
  ): JSX.Element => {
    const localButtonRef = useRef<HTMLButtonElement>(null);
    const buttonRef = ref || localButtonRef; // use local ref if ref not supplied

    let className = 'button';
    if (variant !== 'primary') {
      className = `${className} ${className}--${variant}`;
    }

    return (
      <button
        ref={buttonRef}
        type='button'
        onClick={handleClick}
        onKeyDown={e => handleKeyDown && handleKeyDown(e)}
        className={className}
      >
        {icon && <span className='button__icon'>{icon}</span>}
        {text}
      </button>
    );
  }
);

export default Button;

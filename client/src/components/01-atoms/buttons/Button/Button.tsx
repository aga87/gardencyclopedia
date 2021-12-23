import React, { useRef } from 'react';
import Icon from '../../../00-ions/Icon';

type IconProps = React.ComponentProps<typeof Icon>;

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  text: string;
  iconName?: IconProps['name'] | null;
  handleClick: () => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      text,
      iconName = null,
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
        {iconName && (
          <span className='button__icon'>
            <Icon name={iconName} />
          </span>
        )}
        {text}
      </button>
    );
  }
);

export default Button;

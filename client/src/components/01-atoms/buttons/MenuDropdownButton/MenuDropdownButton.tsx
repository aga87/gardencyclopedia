import React, { useRef } from 'react';
import Icon from '../../../00-ions/Icon';

type IconProps = React.ComponentProps<typeof Icon>;

type MenuDropdownButtonProps = {
  text: string;
  iconName: IconProps['name'];
  selected?: boolean;
  handleClick: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const MenuDropdownButton = React.forwardRef<
  HTMLButtonElement,
  MenuDropdownButtonProps
>(
  (
    {
      text,
      iconName,
      selected = false,
      handleClick,
      handleKeyDown
    }: MenuDropdownButtonProps,
    ref
  ): JSX.Element => {
    const localButtonRef = useRef<HTMLButtonElement>(null);
    const buttonRef = ref || localButtonRef; // use local ref if ref not supplied

    let className = 'menu-dropdown-button';
    if (selected) {
      className = `${className} ${className}--selected`;
    }

    return (
      <button
        ref={buttonRef}
        type='button'
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={className}
        tabIndex={selected ? 0 : -1} // roving tabindex
        data-testid='menu-dropdown-button'
      >
        <span className='menu-dropdown-button__icon' data-testid='icon-wrapper'>
          <Icon name={iconName} />
        </span>
        {text}
      </button>
    );
  }
);

export default MenuDropdownButton;

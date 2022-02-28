import React, { useRef } from 'react';
import Icon from '../../../00-ions/Icon/Icon';

export type IconProps = React.ComponentProps<typeof Icon>; // to reuse in the test file

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
      >
        <span className='menu-dropdown-button__icon'>
          <Icon name={iconName} />
        </span>
        {text}
      </button>
    );
  }
);

export default MenuDropdownButton;

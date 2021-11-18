import React, { useRef } from 'react';

type MenuBlockButtonProps = {
  text: string;
  icon: React.ReactNode;
  selected?: boolean;
  handleClick: () => void;
};

const MenuDropdownButton = React.forwardRef<
  HTMLButtonElement,
  MenuBlockButtonProps
>(
  (
    { text, icon = null, selected = false, handleClick }: MenuBlockButtonProps,
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
        className={className}
      >
        {icon && <span className='menu-dropdown-button__icon'>{icon}</span>}
        {text}
      </button>
    );
  }
);

export default MenuDropdownButton;

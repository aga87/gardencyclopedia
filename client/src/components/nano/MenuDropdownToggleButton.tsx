import React from 'react';

type MenuDropdownToggleButtonProps = {
  variant?: 'primary' | 'secondary';
  icon: React.ReactNode;
  ariaLabel: string;
  id: string;
  dropdownId: string;
  handleClick: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const MenuDropdownToggleButton = React.forwardRef<
  HTMLButtonElement,
  MenuDropdownToggleButtonProps
>(
  (
    {
      variant = 'primary',
      icon,
      ariaLabel,
      id,
      dropdownId,
      handleClick,
      handleKeyDown
    }: MenuDropdownToggleButtonProps,
    ref
  ): JSX.Element => {
    let className = 'icon-button';
    if (variant !== 'primary') {
      className = `${className} ${className}--${variant}`;
    }

    return (
      <button
        ref={ref}
        type='button'
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={className}
        aria-label={ariaLabel}
        id={id}
        aria-haspopup
        aria-controls={dropdownId}
      >
        {icon}
      </button>
    );
  }
);

export default MenuDropdownToggleButton;

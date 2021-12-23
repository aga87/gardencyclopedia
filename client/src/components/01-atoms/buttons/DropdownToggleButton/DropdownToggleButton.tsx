import React from 'react';
import Icon from '../../../00-ions/Icon';

type IconProps = React.ComponentProps<typeof Icon>;

type DropdownToggleButtonProps = {
  variant?: 'primary' | 'secondary';
  iconName: IconProps['name'];
  ariaLabel: string;
  id: string;
  dropdownId: string;
  handleClick: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const DropdownToggleButton = React.forwardRef<
  HTMLButtonElement,
  DropdownToggleButtonProps
>(
  (
    {
      variant = 'primary',
      iconName,
      ariaLabel,
      id,
      dropdownId,
      handleClick,
      handleKeyDown
    }: DropdownToggleButtonProps,
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
        <Icon name={iconName} />
      </button>
    );
  }
);

export default DropdownToggleButton;

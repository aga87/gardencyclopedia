import React from 'react';
import Icon from '../../../00-ions/Icon/Icon';

export type IconProps = React.ComponentProps<typeof Icon>;

type IconButtonProps = {
  variant?: 'primary' | 'secondary';
  iconName: IconProps['name'];
  ariaLabel: string;
  handleClick: () => void;
};

const IconButton = ({
  variant = 'primary',
  iconName,
  ariaLabel,
  handleClick
}: IconButtonProps): JSX.Element => {
  let className = 'icon-button';
  if (variant !== 'primary') {
    className = `${className} ${className}--${variant}`;
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      <Icon name={iconName} />
    </button>
  );
};

export default IconButton;

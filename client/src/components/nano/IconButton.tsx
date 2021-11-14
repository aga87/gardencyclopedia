import React from 'react';

type IconButtonProps = {
  variant?: 'primary' | 'secondary';
  icon: React.ReactNode;
  ariaLabel: string;
  handleClick: () => void;
};

const IconButton = ({
  variant = 'primary',
  icon,
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
      {icon}
    </button>
  );
};

export default IconButton;

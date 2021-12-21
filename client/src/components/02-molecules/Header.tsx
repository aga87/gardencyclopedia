import React from 'react';
import Logo from '../01-atoms/Logo/Logo';

type HeaderProps = {
  variant?: 'primary' | 'secondary';
  title?: string;
};

const Header = ({
  variant = 'primary',
  title = 'Gardencyclopedia'
}: HeaderProps): JSX.Element => {
  let className = 'm-header';
  if (variant !== 'primary') {
    className = `${className} ${className}--${variant}`;
  }

  return (
    <header className={className}>
      <Logo />
      <h1 className='m-header__title'>{title}</h1>
    </header>
  );
};

export default Header;

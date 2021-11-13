import React from 'react';
import Logo from './nano/Logo';

type HeaderProps = {
  variant?: 'primary' | 'secondary';
  title?: string;
};

const Header = ({
  variant = 'primary',
  title = 'Gardencyclopedia'
}: HeaderProps): JSX.Element => {
  let className = 'c-header';
  if (variant !== 'primary') {
    className = `${className} ${className}--${variant}`;
  }

  return (
    <header className={className}>
      <Logo />
      <h1 className='c-header__title'>{title}</h1>
    </header>
  );
};

export default Header;

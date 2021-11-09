import React from 'react';
import Logo from './nano/Logo';

const Header = (): JSX.Element => (
  <header className='c-header'>
    <Logo />
    <h1 className='c-header__title t1'>Gardencyclopedia</h1>
  </header>
);
export default Header;

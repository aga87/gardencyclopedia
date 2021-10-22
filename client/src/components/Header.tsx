import React from 'react';
import Icon from './Icon';

const Header = (): JSX.Element => (
  <header className="c-header">
    <h1 className="c-header__title t1">
      {' '}
      <span className="c-header__logo">
        <Icon name="seedling" />
      </span>
      <br />
      Gardencyclopedia
    </h1>
  </header>
);
export default Header;

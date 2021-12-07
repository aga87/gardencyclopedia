import React from 'react';
import { useAppDispatch } from '../../redux/typed-hooks';
import { openMainMenuModal } from '../../redux/actions/uiActions';
import IconButton from '../01-atoms/buttons/IconButton';

const TopGardenToolbar = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleMainMenuClick = () => {
    dispatch(openMainMenuModal());
  };

  return (
    <nav className='o-menu-top l-menu-top' aria-label='primary'>
      <ul role='presentation' className='l-menu-top__list'>
        <li className='xxs-only'>
          <IconButton
            iconName='menu'
            ariaLabel='Open main menu modal'
            handleClick={handleMainMenuClick}
          />
        </li>
      </ul>
    </nav>
  );
};

export default TopGardenToolbar;

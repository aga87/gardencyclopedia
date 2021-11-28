import React from 'react';
import { useDispatch } from 'react-redux';
import { openMainMenuModal } from '../redux/actions/uiActions';
import IconButton from './nano/IconButton';

const TopGardenToolbar = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleMainMenuClick = () => {
    dispatch(openMainMenuModal());
  };

  return (
    <nav className='c-menu-top l-menu-top' aria-label='primary'>
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

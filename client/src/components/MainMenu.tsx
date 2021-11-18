import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openUserSettingsModal, setView } from '../redux/actions/uiActions';
import { logout } from '../redux/actions/authActions';
import { selectUsername, selectView } from '../redux/reducers/index';
import MenuDropdownButton from './nano/MenuDropdownButton';
import Icon from './nano/Icon';

const MainMenu = (): JSX.Element => {
  const username = useSelector(selectUsername);
  const view = useSelector(selectView);
  const dispatch = useDispatch();

  const handleUserClick = () => {
    dispatch(openUserSettingsModal());
  };

  const handleCalendarClick = () => {
    dispatch(setView('calendar'));
  };

  const handleGardenClick = () => {
    dispatch(setView('garden'));
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <nav className='c-main-menu'>
      <ul className='c-main-menu__list'>
        <li>
          <MenuDropdownButton
            icon={<Icon name='user-cog' />}
            text={username}
            handleClick={handleUserClick}
          />
        </li>
        <li>
          <MenuDropdownButton
            icon={<Icon name='calendar' />}
            text='Calendar'
            handleClick={handleCalendarClick}
            selected={view === 'calendar'}
          />
        </li>
        <li>
          <MenuDropdownButton
            icon={<Icon name='seedling' />}
            text='Garden'
            handleClick={handleGardenClick}
            selected={view === 'garden'}
          />
        </li>
        <li>
          <MenuDropdownButton
            icon={<Icon name='logout' />}
            text='Logout'
            handleClick={handleLogoutClick}
          />
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;

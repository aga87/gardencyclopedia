import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openUserSettingsModal, setView } from '../redux/actions/uiActions';
import { logout } from '../redux/actions/authActions';
import { selectUsername, selectView } from '../redux/reducers/index';
import useWidgetKeyboardSupport from '../utils/hooks/useWidgetKeyboardSupport';
import MenuDropdownButton from './nano/MenuDropdownButton';
import Icon from './nano/Icon';

const MainMenu = (): JSX.Element => {
  const username = useSelector(selectUsername);
  const view = useSelector(selectView);
  const dispatch = useDispatch();
  const menuItems = ['settings', 'calendar', 'garden', 'logout'];
  const { widgetItemsRefs, handleKeyDown } = useWidgetKeyboardSupport(
    menuItems,
    1
  );

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
    <nav className='c-main-menu' aria-label='main'>
      <ul role='presentation' className='c-main-menu__list'>
        <li>
          <MenuDropdownButton
            ref={ref => {
              widgetItemsRefs.current[0] = ref;
            }}
            icon={<Icon name='user-cog' />}
            text={username}
            handleClick={handleUserClick}
            handleKeyDown={handleKeyDown}
          />
        </li>
        <li>
          <MenuDropdownButton
            ref={ref => {
              widgetItemsRefs.current[1] = ref;
            }}
            icon={<Icon name='calendar' />}
            text='Calendar'
            selected={view === 'calendar'}
            handleClick={handleCalendarClick}
            handleKeyDown={handleKeyDown}
          />
        </li>
        <li>
          <MenuDropdownButton
            ref={ref => {
              widgetItemsRefs.current[2] = ref;
            }}
            icon={<Icon name='seedling' />}
            text='Garden'
            selected={view === 'garden'}
            handleClick={handleGardenClick}
            handleKeyDown={handleKeyDown}
          />
        </li>
        <li>
          <MenuDropdownButton
            ref={ref => {
              widgetItemsRefs.current[3] = ref;
            }}
            icon={<Icon name='logout' />}
            text='Logout'
            handleClick={handleLogoutClick}
            handleKeyDown={handleKeyDown}
          />
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;

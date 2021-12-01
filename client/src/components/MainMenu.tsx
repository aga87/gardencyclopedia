import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { openUserSettingsModal, setView } from '../redux/actions/uiActions';
import { logout } from '../redux/actions/authActions';
import { selectUsername, selectView } from '../redux/reducers/index';
import { capitalize } from '../utils/text-utils';
import useWidgetKeyboardSupport from '../utils/hooks/useWidgetKeyboardSupport';
import MenuDropdownButton from './nano/buttons/MenuDropdownButton';

const MainMenu = (): JSX.Element => {
  const username = useSelector(selectUsername);
  const view = useSelector(selectView);
  const dispatch = useAppDispatch();
  const menuItems = [`${username}`, 'calendar', 'garden', 'logout'];
  const initialFocus = menuItems.indexOf(view);
  const { widgetItemsRefs, handleKeyDown } = useWidgetKeyboardSupport(
    menuItems,
    initialFocus
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
            iconName='user-cog'
            text={menuItems[0]}
            handleClick={handleUserClick}
            handleKeyDown={handleKeyDown}
          />
        </li>
        <li>
          <MenuDropdownButton
            ref={ref => {
              widgetItemsRefs.current[1] = ref;
            }}
            iconName='calendar'
            text={capitalize(menuItems[1])}
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
            iconName='seedling'
            text={capitalize(menuItems[2])}
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
            iconName='logout'
            text={capitalize(menuItems[3])}
            handleClick={handleLogoutClick}
            handleKeyDown={handleKeyDown}
          />
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;

import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/typed-hooks';
import { openUserSettingsModal, setView } from '../../redux/actions/uiActions';
import { logout } from '../../redux/actions/authActions';
import { selectUsername, selectView } from '../../redux/reducers/index';
import { capitalize } from '../../utils/text-utils';
import useRovingFocus from '../../hooks/useRovingFocus';
import MenuDropdownButton from '../01-atoms/buttons/MenuDropdownButton/MenuDropdownButton';

const MainMenu = (): JSX.Element => {
  const username = useAppSelector(selectUsername);
  const view = useAppSelector(selectView);
  const dispatch = useAppDispatch();
  const menuItems = [
    `${username}`,
    'calendar' as View,
    'garden' as View,
    'logout'
  ];
  const initialFocus = menuItems.indexOf(view); // set initial focus based on the current view
  const { widgetItemsRefs, handleKeyDown } = useRovingFocus(
    menuItems.length,
    initialFocus,
    true
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
    <nav className='o-main-menu' aria-label='main'>
      <ul role='presentation' className='o-main-menu__list'>
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

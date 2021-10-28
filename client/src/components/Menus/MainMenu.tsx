import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMainMenuModal, setView } from '../../redux/actions/uiActions';
import { logout } from '../../redux/actions/authActions';
import { selectUsername } from '../../redux/reducers/index';
import Btn from '../Btn';
import Icon from '../Icon';

const MainMenu = (): JSX.Element => {
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(closeMainMenuModal());
  };

  const handleUserClick = () => {
    // open user modal
  };

  const handleCalendarClick = () => {
    dispatch(setView('calendar'));
  };

  const handleGardenClick = () => {
    dispatch(setView('garden'));
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    dispatch(closeMainMenuModal());
  };

  return (
    <nav className="c-main-menu">
      <div className="c-main-menu__bar">
        <Btn
          icon={<Icon name="close" />}
          text="Main Menu"
          handleClick={handleCloseClick}
        />
      </div>
      <ul className="c-main-menu__list">
        <li>
          <Btn
            icon={<Icon name="user-cog" />}
            text={username}
            variant="dropdown"
            handleClick={handleUserClick}
          />
        </li>
        <li>
          <Btn
            icon={<Icon name="calendar" />}
            text="Calendar"
            variant="dropdown"
            handleClick={handleCalendarClick}
          />
        </li>
        <li>
          <Btn
            icon={<Icon name="seedling" />}
            text="Garden"
            variant="dropdown"
            handleClick={handleGardenClick}
          />
        </li>
        <li>
          <Btn
            icon={<Icon name="logout" />}
            text="Logout"
            variant="dropdown"
            handleClick={handleLogoutClick}
          />
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;

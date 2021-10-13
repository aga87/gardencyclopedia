import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../../redux/actions/uiActions';
import Btn from '../Btn';
import Icon from '../Icon';

const MainMenu = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleMainMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCalendarClick = () => {
    dispatch(setView('calendar'));
  };

  const handleGardenClick = () => {
    dispatch(setView('garden'));
  };

  return (
    <nav>
      <Btn icon={<Icon name="menu" />} handleClick={handleMainMenuClick} />
      {isExpanded && (
        <ul>
          <li>
            <Btn
              icon={<Icon name="calendar" />}
              text="Calendar"
              handleClick={handleCalendarClick}
            />
          </li>
          <li>
            <Btn
              icon={<Icon name="seedling" />}
              text="Garden (coming soon)"
              handleClick={handleGardenClick}
            />
          </li>
          <li>
            <Icon name="user-cog" /> Username
          </li>
          <li>
            <Icon name="logout" /> Log out
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MainMenu;

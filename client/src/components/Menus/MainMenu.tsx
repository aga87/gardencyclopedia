import React, { useState } from 'react';
import Btn from '../Btn';
import Icon from '../Icon';

const MainMenu = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMainMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav>
      <Btn icon={<Icon name="menu" />} handleClick={handleMainMenuClick} />
      {isExpanded && (
        <ul>
          <li>
            <Icon name="calendar" /> Calendar
          </li>
          <li>
            <Icon name="seedling" /> Garden (coming soon)
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

import React from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../redux/actions/uiActions';
import IconButton from './nano/IconButton';
import Icon from './nano/Icon';

const BottomGardenToolbar = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleCalendarClick = () => {
    dispatch(setView('calendar' as View));
  };

  return (
    <nav className='c-menu-bottom l-menu-bottom'>
      <ul className='l-menu-bottom__list'>
        <li>
          <IconButton
            icon={<Icon name='calendar' />}
            handleClick={handleCalendarClick}
            ariaLabel='Switch to calendar view'
          />
        </li>
      </ul>
    </nav>
  );
};

export default BottomGardenToolbar;

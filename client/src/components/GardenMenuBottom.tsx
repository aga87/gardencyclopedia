import React from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../redux/actions/uiActions';
import IconButton from './nano/buttons/IconButton';

const GardenMenuBottom = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleCalendarClick = () => {
    dispatch(setView('calendar' as View));
  };

  return (
    <nav className='c-menu-bottom l-menu-bottom' aria-label='secondary'>
      <ul role='presentation' className='l-menu-bottom__list'>
        <li>
          <IconButton
            iconName='calendar'
            handleClick={handleCalendarClick}
            ariaLabel='Switch to calendar view'
          />
        </li>
      </ul>
    </nav>
  );
};

export default GardenMenuBottom;

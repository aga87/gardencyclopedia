import React from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../../redux/actions/uiActions';
import Toolbar from './Toolbar';
import IconButton from '../nano/IconButton';
import Icon from '../nano/Icon';

const BottomGardenToolbar = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleCalendarClick = () => {
    dispatch(setView('calendar' as View));
  };

  return (
    <Toolbar>
      <ul className='l-bottom-toolbar'>
        <li>
          <IconButton
            icon={<Icon name='calendar' />}
            handleClick={handleCalendarClick}
            ariaLabel='Switch to calendar view'
          />
        </li>
      </ul>
    </Toolbar>
  );
};

export default BottomGardenToolbar;

import React from 'react';
import { useDispatch } from 'react-redux';
import { openMainMenuModal } from '../../redux/actions/uiActions';
import Toolbar from './Toolbar';
import IconButton from '../nano/IconButton';
import Icon from '../nano/Icon';

const TopGardenToolbar = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleMainMenuClick = () => {
    dispatch(openMainMenuModal());
  };

  return (
    <Toolbar>
      <ul className='l-top-toolbar'>
        <li className='xxs-only'>
          <IconButton
            icon={<Icon name='menu' />}
            ariaLabel='Open main menu modal'
            handleClick={handleMainMenuClick}
          />
        </li>
      </ul>
    </Toolbar>
  );
};

export default TopGardenToolbar;

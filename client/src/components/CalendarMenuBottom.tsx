import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortPlants } from '../redux/actions/plantsActions';
import { setView } from '../redux/actions/uiActions';
import { selectSort } from '../redux/reducers/index';
import { sortOptions } from '../utils/constants';
import Select from './nano/Select';
import IconButton from './nano/IconButton';
import Icon from './nano/Icon';

const BottomCalendarToolbar = (): JSX.Element => {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortPlants(e.target.value as Sort));
  };

  const handleGardenClick = () => {
    dispatch(setView('garden' as View));
  };

  return (
    <nav className='c-menu-bottom'>
      <ul className='l-menu-bottom__list'>
        <li className='l-menu-bottom__item-center'>
          <Select
            variant='sort'
            options={sortOptions}
            value={sort}
            handleChange={handleSort}
            ariaLabel='Sort plants by'
          />
        </li>
        <li>
          <IconButton
            icon={<Icon name='seedling' />}
            handleClick={handleGardenClick}
            ariaLabel='Switch to garden view'
          />
        </li>
      </ul>
    </nav>
  );
};

export default BottomCalendarToolbar;

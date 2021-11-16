import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortPlants } from '../../redux/actions/plantsActions';
import { setView } from '../../redux/actions/uiActions';
import { sortOptions } from '../../utils/constants';
import Toolbar from './Toolbar';
import Select from '../nano/Select';
import IconButton from '../nano/IconButton';
import Icon from '../nano/Icon';

const BottomCalendarToolbar = (): JSX.Element => {
  const [sort, setSort] = useState<Sort>('name');
  const dispatch = useDispatch();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as Sort);
    dispatch(sortPlants(e.target.value as Sort));
  };

  const handleGardenClick = () => {
    dispatch(setView('garden' as View));
  };

  return (
    <Toolbar>
      <ul className='l-bottom-toolbar'>
        <li className='l-bottom-toolbar__item-center'>
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
    </Toolbar>
  );
};

export default BottomCalendarToolbar;

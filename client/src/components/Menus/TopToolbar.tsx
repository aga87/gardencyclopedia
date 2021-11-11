import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  openMainMenuModal,
  openAddPlantModal
} from '../../redux/actions/uiActions';
import { filterPlants, sortPlants } from '../../redux/actions/plantsActions';
import { plantCategories, sortOptions } from '../../utils/constants';
import Toolbar from './Toolbar';
import IconButton from '../IconButton';
import Icon from '../nano/Icon';
import Select from '../nano/Select';

const TopToolbar = (): JSX.Element => {
  const [filter, setFilter] = useState<Category>('');
  const [sort, setSort] = useState<Sort>('name');
  const dispatch = useDispatch();

  const handleMainMenuClick = () => {
    dispatch(openMainMenuModal());
  };

  const handleAddClick = () => {
    dispatch(openAddPlantModal());
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as Category);
    dispatch(filterPlants(e.target.value as Category));
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as Sort);
    dispatch(sortPlants(e.target.value as Sort));
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
        <li className='l-top-toolbar__item-center'>
          <Select
            options={plantCategories}
            placeholder='All Plants'
            value={filter}
            handleChange={handleFilterChange}
            ariaLabel='Filter plants'
          />
        </li>
        <li className='not-xxs'>
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
            icon={<Icon name='plus' />}
            ariaLabel='Open new plant modal'
            handleClick={handleAddClick}
          />
        </li>
      </ul>
    </Toolbar>
  );
};

export default TopToolbar;

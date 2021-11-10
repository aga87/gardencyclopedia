import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  openMainMenuModal,
  openAddPlantModal
} from '../../redux/actions/uiActions';
import { filterPlants, sortPlants } from '../../redux/actions/plantsActions';
import { plantCategories, sortOptions } from '../../utils/constants';
import Btn from '../Btn';
import Icon from '../nano/Icon';
import Select from '../nano/Select';

const TopMenu = (): JSX.Element => {
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
    <nav className='c-top-menu l-top-menu'>
      <ul className='l-top-menu__list'>
        <li className='xxs-only'>
          <Btn icon={<Icon name='menu' />} handleClick={handleMainMenuClick} />
        </li>
        <li className='l-top-menu__list-item-center'>
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
          <Btn icon={<Icon name='plus' />} handleClick={handleAddClick} />
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;

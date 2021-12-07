import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/typed-hooks';
import {
  openMainMenuModal,
  openAddPlantModal
} from '../../redux/actions/uiActions';
import { filterPlants, sortPlants } from '../../redux/actions/plantsActions';
import { plantCategories, sortOptions } from '../../utils/constants';
import { selectFilter, selectSort } from '../../redux/reducers/index';
import IconButton from '../01-atoms/buttons/IconButton';
import Select from '../01-atoms/Select';

const CalendarMenuTop = (): JSX.Element => {
  const filter = useAppSelector(selectFilter);
  const sort = useAppSelector(selectSort);
  const dispatch = useAppDispatch();

  const handleMainMenuClick = () => {
    dispatch(openMainMenuModal());
  };

  const handleAddClick = () => {
    dispatch(openAddPlantModal());
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterPlants(e.target.value as Category));
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortPlants(e.target.value as Sort));
  };

  return (
    <nav className='o-menu-top l-menu-top' aria-label='primary'>
      <ul role='presentation' className='l-menu-top__list'>
        <li className='xxs-only'>
          <IconButton
            iconName='menu'
            ariaLabel='Open main menu modal'
            handleClick={handleMainMenuClick}
          />
        </li>
        <li className='l-menu-top__item-center'>
          <form
            className='l-menu-top__search-form'
            role='search'
            aria-label='Search calendar plants'
          >
            <Select
              options={plantCategories}
              placeholder='All Plants'
              value={filter}
              handleChange={handleFilterChange}
              ariaLabel='Filter by'
              controlledRegionId='calendar'
            />
            <div className='not-xxs'>
              <Select
                variant='sort'
                options={sortOptions}
                value={sort}
                handleChange={handleSort}
                ariaLabel='Sort by'
                controlledRegionId='calendar'
              />
            </div>
          </form>
        </li>
        <li>
          <IconButton
            iconName='plus'
            ariaLabel='Add a new plant'
            handleClick={handleAddClick}
          />
        </li>
      </ul>
    </nav>
  );
};

export default CalendarMenuTop;

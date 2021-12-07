import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/typed-hooks';
import { sortPlants } from '../../redux/actions/plantsActions';
import { setView } from '../../redux/actions/uiActions';
import { selectSort } from '../../redux/reducers/index';
import { sortOptions } from '../../utils/constants';
import Select from '../01-atoms/Select';
import IconButton from '../01-atoms/buttons/IconButton';

const CalendarMenuBottom = (): JSX.Element => {
  const sort = useAppSelector(selectSort);
  const dispatch = useAppDispatch();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortPlants(e.target.value as Sort));
  };

  const handleGardenClick = () => {
    dispatch(setView('garden' as View));
  };

  return (
    <nav className='o-menu-bottom' aria-label='secondary'>
      <ul role='presentation' className='l-menu-bottom__list'>
        <li className='l-menu-bottom__item-center'>
          <form role='search' aria-label='Sort plants by'>
            <Select
              variant='sort'
              options={sortOptions}
              value={sort}
              handleChange={handleSort}
              controlledRegionId='calendar'
            />
          </form>
        </li>
        <li>
          <IconButton
            iconName='seedling'
            handleClick={handleGardenClick}
            ariaLabel='Switch to garden view'
          />
        </li>
      </ul>
    </nav>
  );
};

export default CalendarMenuBottom;

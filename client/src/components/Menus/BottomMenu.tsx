import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortPlants } from '../../redux/actions/plantsActions';
import { setView } from '../../redux/actions/uiActions';
import { selectView } from '../../redux/reducers/index';
import { sortOptions } from '../../utils/constants';
import Select from '../Select';
import Btn from '../Btn';
import Icon from '../nano/Icon';

const BottomMenu = (): JSX.Element => {
  const [sort, setSort] = useState<Sort>('name');
  const view = useSelector(selectView);
  const dispatch = useDispatch();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as Sort);
    dispatch(sortPlants(e.target.value as Sort));
  };

  const handleCalendarClick = () => {
    dispatch(setView('calendar' as View));
  };

  const handleGardenClick = () => {
    dispatch(setView('garden' as View));
  };

  return (
    <nav className='c-bottom-menu l-bottom-menu'>
      <ul className='l-bottom-menu__list'>
        <li className='l-bottom-menu__list-item-center'>
          <Select
            variant='sort'
            options={sortOptions}
            value={sort}
            handleChange={handleSort}
            ariaLabel='Sort by'
          />
        </li>
        <li>
          {view === 'garden' ? (
            <Btn
              icon={<Icon name='calendar' />}
              handleClick={handleCalendarClick}
            />
          ) : (
            <Btn
              icon={<Icon name='seedling' />}
              handleClick={handleGardenClick}
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default BottomMenu;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortPlants } from '../../redux/actions/plantsActions';
import { setView } from '../../redux/actions/uiActions';
import { selectView } from '../../redux/reducers/index';
import { sortOptions } from '../../utils/constants';
import Toolbar from './Toolbar';
import Select from '../nano/Select';
import Btn from '../Btn';
import Icon from '../nano/Icon';

const BottomToolbar = (): JSX.Element => {
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
    </Toolbar>
  );
};

export default BottomToolbar;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortPlants } from '../../redux/actions/plantsActions';
import { setView } from '../../redux/actions/uiActions';
import { selectView } from '../../redux/reducers/index';
import { sortOptions } from '../../utils/constants';
import SelectField from '../SelectField';
import Btn from '../Btn';
import Icon from '../Icon';

const BottomMenu = (): JSX.Element => {
  const [sort, setSort] = useState('name');
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
    <nav>
      <SelectField
        inputId="sort-plants"
        label="Sort by:"
        options={sortOptions}
        value={sort}
        handleChange={handleSort}
      />
      {view === 'garden' ? (
        <Btn
          icon={<Icon name="calendar" />}
          handleClick={handleCalendarClick}
        />
      ) : (
        <Btn icon={<Icon name="seedling" />} handleClick={handleGardenClick} />
      )}
    </nav>
  );
};

export default BottomMenu;

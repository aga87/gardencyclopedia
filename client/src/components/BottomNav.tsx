import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortPlants } from '../redux/actions/plantsActions';
import { sortOptions } from '../utils/constants';
import SelectField from './SelectField';

const BottomNav = (): JSX.Element => {
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
    dispatch(sortPlants(e.target.value));
  };

  return (
    <nav>
      <SelectField
        id="sort-plants"
        label="Sort by:"
        options={sortOptions}
        value={sort}
        handleChange={handleSort}
      />
    </nav>
  );
};

export default BottomNav;
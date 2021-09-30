import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openPlantModal } from '../redux/actions/uiActions';
import { filterPlants } from '../redux/actions/plantsActions';
import { plantCategories } from '../utils/constants';
import Btn from './Btn';
import Icon from './Icon';
import SelectField from './SelectField';

const Nav = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPlantModal());
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
    dispatch(filterPlants(e.target.value));
  };

  return (
    <nav>
      <Icon name="menu" />
      <SelectField
        id="filter-plants"
        label="Filter plants"
        options={plantCategories}
        placeholder="All Plants"
        value={filter}
        handleChange={handleFilterChange}
      />
      <Btn icon={<Icon name="plus" />} handleClick={handleClick} />
    </nav>
  );
};

export default Nav;

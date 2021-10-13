import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openPlantModal } from '../../redux/actions/uiActions';
import { filterPlants } from '../../redux/actions/plantsActions';
import { plantCategories, emptyPlant } from '../../utils/constants';
import Btn from '../Btn';
import Icon from '../Icon';
import SelectField from '../SelectField';

const TopMenu = (): JSX.Element => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPlantModal(emptyPlant));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as Category);
    dispatch(filterPlants(e.target.value as Category));
  };

  return (
    <nav>
      <ul>
        <li>
          <SelectField
            inputId="filter-plants"
            label="Filter plants"
            options={plantCategories}
            placeholder="All Plants"
            value={filter}
            handleChange={handleFilterChange}
          />
        </li>
        <li>
          <Btn icon={<Icon name="plus" />} handleClick={handleClick} />
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  openMainMenuModal,
  openAddPlantModal
} from '../../redux/actions/uiActions';
import { filterPlants } from '../../redux/actions/plantsActions';
import { plantCategories, emptyPlant } from '../../utils/constants';
import Btn from '../Btn';
import Icon from '../Icon';
import Select from '../Select';

const TopMenu = (): JSX.Element => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleMainMenuClick = () => {
    dispatch(openMainMenuModal());
  };

  const handlePlusClick = () => {
    dispatch(openAddPlantModal(emptyPlant));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as Category);
    dispatch(filterPlants(e.target.value as Category));
  };

  return (
    <nav className='c-top-menu l-top-menu'>
      <ul className='l-top-menu__list'>
        <li>
          <Btn icon={<Icon name='menu' />} handleClick={handleMainMenuClick} />
        </li>
        <li>
          <Select
            variant='filter'
            options={plantCategories}
            placeholder='All Plants'
            value={filter}
            handleChange={handleFilterChange}
            ariaLabel='Filter plants'
          />
        </li>
        <li>
          <Btn icon={<Icon name='plus' />} handleClick={handlePlusClick} />
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;

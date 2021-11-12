import React from 'react';
import { useDispatch } from 'react-redux';
import { openAddPlantModal } from '../redux/actions/uiActions';
import Button from './Button';
import Icon from './nano/Icon';

const NoPlants = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openAddPlantModal());
  };

  return (
    <div>
      <h2 className='t5'>No Plants</h2>
      <p>
        <Button
          icon={<Icon name='plus' />}
          text='New Plant'
          handleClick={handleClick}
        />
        or press the <Icon name='plus' /> button in the top right corner to add
        a new plant.
      </p>
    </div>
  );
};

export default NoPlants;

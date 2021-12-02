import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { openAddPlantModal } from '../../redux/actions/uiActions';
import Icon from '../00-ions/Icon';
import Button from '../01-atoms/buttons/Button';

const NoPlants = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleAddPlantClick = () => {
    dispatch(openAddPlantModal());
  };

  return (
    <div className='m-no-plants l-no-plants'>
      <h2 className='m-no-plants__title l-no-plants__title'>No Plants</h2>
      <div className='l-no-plants__btn'>
        <Button
          iconName='plus'
          text='New Plant'
          handleClick={handleAddPlantClick}
        />
      </div>
      <p>
        Or press the{' '}
        <span className='m-no-plants__icon'>
          <Icon name='plus' />
        </span>{' '}
        button in the top right corner to add a new plant.
      </p>
    </div>
  );
};

export default NoPlants;

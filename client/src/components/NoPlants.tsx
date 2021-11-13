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
    <div className='c-no-plants'>
      <h2 className='c-no-plants__title'>No Plants</h2>
      <Button
        icon={<Icon name='plus' />}
        text='New Plant'
        handleClick={handleClick}
      />
      <p>
        or press the{' '}
        <span className='c-no-plants__icon'>
          <Icon name='plus' />
        </span>{' '}
        button in the top right corner to add a new plant.
      </p>
    </div>
  );
};

export default NoPlants;

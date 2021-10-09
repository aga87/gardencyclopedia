import React from 'react';
import { useDispatch } from 'react-redux';
import { openPlantModal } from '../redux/actions/uiActions';
import { emptyPlant } from '../utils/constants';
import Btn from './Btn';
import Icon from './Icon';

const NoPlantsView = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPlantModal(emptyPlant));
  };

  return (
    <section>
      No Plants
      <Btn
        icon={<Icon name="plus" />}
        text="New Plant"
        handleClick={handleClick}
      />{' '}
      or press the <Icon name="plus" /> button in the top right corner to create
      a new plant.
    </section>
  );
};

export default NoPlantsView;

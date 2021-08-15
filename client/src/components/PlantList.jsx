import React from 'react';
import { useSelector } from 'react-redux';
import { getPlants } from '../redux/reducers/index';
import Plant from './Plant';

const PlantList = () => {
  const plants = useSelector(getPlants);

  const plantListItem = plants.map(plant => (
    <li key={plant.id}>
      <Plant name={plant.name} id={plant.id} />
    </li>
  ));

  return <ul>{plantListItem}</ul>;
};

export default PlantList;

import React from 'react';
import { useSelector } from 'react-redux';
import { getPlants } from '../redux/reducers/index';

const PlantList = () => {
  const plants = useSelector(getPlants);

  const plantListItem = plants.map(plant => (
    <li key={plant.id}>{plant.name}</li>
  ));

  return <ul>{plantListItem}</ul>;
};

export default PlantList;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPlants } from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantActions';
import Plant from './Plant';

const PlantList = () => {
  const plants = useSelector(getAllPlants);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlants);
  }, [dispatch]);

  const plantListItem = plants.map(plant => (
    <li key={plant.id}>
      <Plant name={plant.name} id={plant.id} />
    </li>
  ));

  return <ul>{plantListItem}</ul>;
};

export default PlantList;

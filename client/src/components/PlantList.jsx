import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPlants } from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantsActions';
import Plant from './Plant';

const PlantList = () => {
  const plants = useSelector(selectAllPlants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  const plantListItems = plants.map(plant => (
    <li key={plant._id}>
      <Plant id={plant._id} name={plant.name} />
    </li>
  ));

  return <ul>{plantListItems}</ul>;
};

export default PlantList;

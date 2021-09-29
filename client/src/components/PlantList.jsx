import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPlants } from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantsActions';
import NoPlantsView from './NoPlantsView';
import Plant from './Plant';

const PlantList = () => {
  const plants = useSelector(selectAllPlants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  if (plants.length === 0) return <NoPlantsView />;

  const plantListItems = plants.map(plant => (
    <li key={plant._id}>
      <Plant
        id={plant._id}
        name={plant.name}
        desc={plant.desc}
        category={plant.category}
        sowFrom={plant.sowFrom}
        sowUntil={plant.sowUntil}
        harvestFrom={plant.harvestFrom}
        harvestUntil={plant.harvestUntil}
      />
    </li>
  ));

  return <ul>{plantListItems}</ul>;
};

export default PlantList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPlants, selectFilter } from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantsActions';
import NoPlantsView from './NoPlantsView';
import Plant from './Plant';

const PlantList = () => {
  const plants = useSelector(selectAllPlants);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  if (plants.length === 0) return <NoPlantsView />;

  const filteredPlants = plants.filter(plant => plant.category === filter);

  const plantListItems = filteredPlants.map(plant => (
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

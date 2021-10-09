import React from 'react';
import { plantCategories } from '../utils/constants';
import Icon from './Icon';
import Plant from './Plant';
import NoPlantsView from './NoPlantsView';

// array of plant categories strings in readonly mode
const plantCategoriesArr = [...plantCategories] as const;

type PlantListProps = {
  isLoading: boolean;
  plants: Plant[];
  filter: typeof plantCategoriesArr[number];
};

const PlantList = ({
  isLoading,
  plants,
  filter
}: PlantListProps): JSX.Element => {
  if (isLoading) return <Icon name="spinner" />;
  if (plantCategoriesArr.length === 0) return <NoPlantsView />;

  const filteredPlants = plants.filter(plant => {
    if (!filter) return plants;
    return plant.category === filter;
  });

  if (filteredPlants.length === 0) return <NoPlantsView />;

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

import React from 'react';
import { plantCategories } from '../utils/constants';
import Icon from './Icon';
import NoPlantsView from './NoPlantsView';
import PlantEntry from './PlantEntry';
import type { Plant } from '../utils/common-types';

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
      <PlantEntry plant={plant} />
    </li>
  ));

  return <ul>{plantListItems}</ul>;
};

export default PlantList;

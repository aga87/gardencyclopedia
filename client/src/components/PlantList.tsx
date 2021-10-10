import React from 'react';
import { plantCategories, months } from '../utils/constants';
import sortPlants from '../utils/plants-utils';
import Icon from './Icon';
import NoPlantsView from './NoPlantsView';
import PlantEntry from './PlantEntry';
import type { Plant, Sort } from '../utils/common-types';

// array in readonly mode
const plantCategoriesArr = [...plantCategories] as const;

type PlantListProps = {
  isLoading: boolean;
  plants: Plant[];
  filter: typeof plantCategoriesArr[number];
  sort: Sort;
};

const PlantList = ({
  isLoading,
  plants,
  filter,
  sort
}: PlantListProps): JSX.Element => {
  if (isLoading) return <Icon name="spinner" />;
  if (plants.length === 0) return <NoPlantsView />;

  const filteredPlants = plants.filter(plant => {
    if (!filter) return plants;
    return plant.category === filter;
  });

  if (filteredPlants.length === 0) return <NoPlantsView />;

  const sortedFilteredPlants = sortPlants(filteredPlants, sort, months);

  if (sortedFilteredPlants.length === 0) return <NoPlantsView />;

  const plantListItems = sortedFilteredPlants.map(plant => (
    <li key={plant._id}>
      <PlantEntry plant={plant} />
    </li>
  ));

  return <ul>{plantListItems}</ul>;
};

export default PlantList;

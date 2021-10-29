import React from 'react';
import { months } from '../utils/constants';
import sortPlants from '../utils/plants-utils';
import Loader from './Loader';
import NoPlantsView from './NoPlantsView';
import PlantEntry from './PlantEntry';

type PlantListProps = {
  isLoading: boolean;
  plants: Plant[];
  filter: Category;
  sort: Sort;
};

const PlantList = ({
  isLoading,
  plants,
  filter,
  sort
}: PlantListProps): JSX.Element => {
  if (isLoading)
    return (
      <div className="l-flex-centerY">
        <Loader />
      </div>
    );
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

  return (
    <figure>
      <ul>{plantListItems}</ul>
      <figcaption>{plantListItems.length} Plants</figcaption>
    </figure>
  );
};

export default PlantList;

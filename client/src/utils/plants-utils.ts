import type { Plant, Sort } from './common-types';

const sortPlants = (plants: Plant[], sort: Sort): Plant[] => {
  switch (sort) {
    case 'name':
      return plants;
    case 'category': {
      const compareCategory = (a: Plant, b: Plant) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      };
      return plants.sort(compareCategory);
    }
    default:
      return plants;
  }
};

export default sortPlants;

const sortPlants = (plants: Plant[], sort: Sort, months: Month[]): Plant[] => {
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
    case 'sowing time': {
      const compareSowFrom = (a: Plant, b: Plant) =>
        months.indexOf(a.sowFrom) - months.indexOf(b.sowFrom);
      return plants.sort(compareSowFrom);
    }
    case 'harvest time': {
      const compareHarvestFrom = (a: Plant, b: Plant) =>
        months.indexOf(a.harvestFrom) - months.indexOf(b.harvestFrom);
      return plants.sort(compareHarvestFrom);
    }
    default:
      return plants;
  }
};

export default sortPlants;

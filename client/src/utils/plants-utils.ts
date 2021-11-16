export const toZeroOnesArr = (
  monthStart: Month,
  monthEnd: Month,
  months: Month[]
): number[] =>
  months.map((month, i) => {
    const startingMonthIndex = months.indexOf(monthStart);
    const endingMonthIndex = months.indexOf(monthEnd);
    const dataIsMissing = startingMonthIndex === -1 || endingMonthIndex === -1;
    if (dataIsMissing) return 0;

    if (startingMonthIndex < endingMonthIndex) {
      if (i >= startingMonthIndex && i <= endingMonthIndex) return 1;
      return 0;
    }
    if (startingMonthIndex > endingMonthIndex) {
      if (i <= endingMonthIndex) return 1;
      if (i > endingMonthIndex && i < startingMonthIndex) return 0;
      return 1;
    }
    // if equal
    if (i === startingMonthIndex) return 1;
    return 0;
  });

export const sortPlants = (
  plants: Plant[],
  sort: Sort,
  months: Month[]
): Plant[] => {
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
      const compareSowFrom = (a: Plant, b: Plant) => {
        const sowingPeriodArrPlantA = toZeroOnesArr(
          a.sowFrom,
          a.sowUntil,
          months
        );
        const sowingPeriodArrPlantB = toZeroOnesArr(
          b.sowFrom,
          b.sowUntil,
          months
        );
        // e.g. for sowing period from Nov - Feb the earliest month is January
        const earliestMonthPlantA = sowingPeriodArrPlantA.indexOf(1);
        const earliestMonthPlantB = sowingPeriodArrPlantB.indexOf(1);

        return earliestMonthPlantA - earliestMonthPlantB;
      };
      return plants.sort(compareSowFrom);
    }
    case 'harvest time': {
      const compareHarvestFrom = (a: Plant, b: Plant) => {
        const harvestingPeriodArrPlantA = toZeroOnesArr(
          a.harvestFrom,
          a.harvestUntil,
          months
        );
        const harvestingPeriodArrPlantB = toZeroOnesArr(
          b.harvestFrom,
          b.harvestUntil,
          months
        );
        // e.g. for harvesting period from Nov - Feb the earliest month is January
        const earliestMonthPlantA = harvestingPeriodArrPlantA.indexOf(1);
        const earliestMonthPlantB = harvestingPeriodArrPlantB.indexOf(1);
        
        return earliestMonthPlantA - earliestMonthPlantB;
      };
      return plants.sort(compareHarvestFrom);
    }
    default:
      return plants;
  }
};

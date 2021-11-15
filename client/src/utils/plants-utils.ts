// const firstIndex = months.indexOf(monthStart);
// const lastIndex = months.indexOf(monthEnd);
// const dataIsMissing = firstIndex === -1 || lastIndex === -1;

// const monthRow = months.map((month, i) => {
//   if (dataIsMissing) return <td key={month} className='month-data' />;
//   if (firstIndex < lastIndex) {
//     if (i >= firstIndex && i <= lastIndex)
//       return <td key={month} className={className} />;
//     return <td key={month} className='month-data' />;
//   }
//   if (firstIndex > lastIndex) {
//     if (i <= lastIndex) return <td key={month} className={className} />;
//     if (i > lastIndex && i < firstIndex)
//       return <td key={month} className='month-data' />;
//     return <td key={month} className={className} />;
//   }
//   // if equal
//   if (i === firstIndex) return <td key={month} className={className} />;
//   return <td key={month} className='month-data' />;
// });

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

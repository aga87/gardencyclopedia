/* Capitalizes the first letter in a string */
/* eslint-disable import/prefer-default-export */
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getAccessibleChartLabel = (
  sowFrom: Month,
  sowUntil: Month,
  harvestFrom: Month,
  harvestUntil: Month
): string => {
  let sowingDataLabel = '';
  let harvestDataLabel = '';

  if (!sowFrom || !sowUntil) {
    sowingDataLabel = 'No sowing data.';
  } else if (sowFrom === sowUntil) {
    sowingDataLabel = `Sow in ${sowFrom}.`;
  } else {
    sowingDataLabel = `Sow from ${sowFrom} to ${sowUntil}.`;
  }

  if (!harvestFrom || !harvestUntil) {
    harvestDataLabel = 'No harvesting data.';
  } else if (harvestFrom === harvestUntil) {
    harvestDataLabel = `Harvest in ${harvestFrom}.`;
  } else {
    harvestDataLabel = `Harvest from ${harvestFrom} to ${harvestUntil}.`;
  }

  return `${sowingDataLabel} ${harvestDataLabel}`;
};

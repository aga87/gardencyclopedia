/* Capitalizes the first letter in a string */
/* eslint-disable import/prefer-default-export */
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

type SowingRange = {
  sowFrom: Month;
  sowUntil: Month;
};

export const getSowingDataLabel = ({ sowFrom, sowUntil }: SowingRange) => {
  let sowingDataLabel = '';
  if (!sowFrom || !sowUntil) {
    sowingDataLabel = 'No sowing data.';
  } else if (sowFrom === sowUntil) {
    sowingDataLabel = `Sow in ${sowFrom}.`;
  } else {
    sowingDataLabel = `Sow from ${sowFrom} to ${sowUntil}.`;
  }
  return sowingDataLabel;
};

type HarvestRange = {
  harvestFrom: Month;
  harvestUntil: Month;
};

export const getHarvestDataLabel = ({ harvestFrom, harvestUntil }: HarvestRange) => {
  let harvestDataLabel = '';
  if (!harvestFrom || !harvestUntil) {
    harvestDataLabel = 'No harvesting data.';
  } else if (harvestFrom === harvestUntil) {
    harvestDataLabel = `Harvest in ${harvestFrom}.`;
  } else {
    harvestDataLabel = `Harvest from ${harvestFrom} to ${harvestUntil}.`;
  }

  return harvestDataLabel;
};

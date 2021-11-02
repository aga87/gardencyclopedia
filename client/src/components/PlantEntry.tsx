import React from 'react';
import { capitalize } from '../utils/text-utils';
import PlantEntryHeader from './PlantEntryHeader';
import CalendarChart from './CalendarChart';

type PlantEntryProps = {
  plant: Plant;
};

const PlantEntry = ({ plant }: PlantEntryProps): JSX.Element => {
  const { desc, category, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    plant;

  return (
    <div className="c-plant-entry">
      <PlantEntryHeader plant={plant} />
      <p className="c-plant-entry__desc">{desc}</p>
      <p className="c-plant-entry__category s1">{capitalize(category)}</p>
      <CalendarChart
        sowFrom={sowFrom}
        sowUntil={sowUntil}
        harvestFrom={harvestFrom}
        harvestUntil={harvestUntil}
      />
    </div>
  );
};

export default PlantEntry;

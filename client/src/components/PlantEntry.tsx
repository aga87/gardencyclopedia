import React from 'react';
import CalendarChart from './CalendarChart';
import PlantMenu from './PlantMenu';

type PlantEntryProps = {
  plant: Plant;
};

const PlantEntry = ({ plant }: PlantEntryProps): JSX.Element => {
  const { name, desc, category, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    plant;

  return (
    <div>
      <header>
        <h2>{name}</h2>
        <PlantMenu plant={plant} />
      </header>
      <p>{desc}</p>
      <p>{category}</p>
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

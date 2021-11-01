import React from 'react';
import { capitalize } from '../utils/text-utils';
import CalendarChart from './CalendarChart';
import PlantMenu from './Menus/PlantMenu';

type PlantEntryProps = {
  plant: Plant;
};

const PlantEntry = ({ plant }: PlantEntryProps): JSX.Element => {
  const { name, desc, category, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    plant;

  return (
    <div className="c-plant-entry">
      <header className="c-plant-entry__header">
        <h2 className="c-plant-entry__title t5">{name}</h2>
        <div className="c-plant-entry__menu-btn">
          <PlantMenu plant={plant} />
        </div>
      </header>
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

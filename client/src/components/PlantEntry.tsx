import React from 'react';
import PlantEntryHeader from './PlantEntryHeader';
import PlantDesc from './PlantDesc';
import Tag from './nano/Tag';
import CalendarChart from './CalendarChart';

type PlantEntryProps = {
  plant: Plant;
};

const PlantEntry = ({ plant }: PlantEntryProps): JSX.Element => {
  const { desc, category, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    plant;

  return (
    <div className='c-plant-entry'>
      <PlantEntryHeader plant={plant} />
      <div className='l-plant-entry__desc'>
        <PlantDesc desc={desc} />
      </div>
      <div className='l-plant-entry__category'>
        <Tag tag={category} />
      </div>
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

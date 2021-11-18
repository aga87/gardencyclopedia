import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlantById } from '../redux/reducers/index';
import type { RootState } from '../redux/store';
import PlantEntryHeader from './PlantEntryHeader';
import Description from './nano/Description';
import Tag from './nano/Tag';
import CalendarChart from './CalendarChart';

type PlantEntryProps = {
  plantId: string;
};

const PlantEntry = ({ plantId }: PlantEntryProps): JSX.Element | null => {
  const plant = useSelector((state: RootState) =>
    selectPlantById(state, plantId)
  );

  if (!plant) return null;

  const { desc, category, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    plant;

  return (
    <div className='c-plant-entry'>
      <PlantEntryHeader plant={plant} />
      <div className='l-plant-entry__desc'>
        <Description text={desc} />
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

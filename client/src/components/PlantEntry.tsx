import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlantById } from '../redux/reducers/index';
import type { RootState } from '../redux/store';
import Title from './01-atoms/Title';
import Subtitle from './01-atoms/Subtitle';
import Tag from './01-atoms/Tag';
import PlantMenu from './PlantMenu';
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
      <div className='l-plant-entry__header'>
        <Title title={plant.name} />
        <div className='l-plant-entry-header__menu-btn'>
          <PlantMenu plant={plant} />
        </div>
      </div>
      <div className='l-plant-entry__desc'>
        <Subtitle subtitle={desc} />
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

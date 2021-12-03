import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlantById } from '../../redux/reducers/index';
import type { RootState } from '../../redux/store';
import Title from '../01-atoms/Title';
import Subtitle from '../01-atoms/Subtitle';
import Tag from '../01-atoms/Tag';
import CalendarEntryMenu from './CalendarEntryMenu';
import CalendarChart from './CalendarChart';

type CalendarPlantEntryProps = {
  plantId: string;
};

const CalendarPlantEntry = ({ plantId }: CalendarPlantEntryProps): JSX.Element | null => {
  const plant = useSelector((state: RootState) =>
    selectPlantById(state, plantId)
  );

  if (!plant) return null;

  const { desc, category, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    plant;

  return (
    <div className='m-calendar-plant-entry'>
      <div className='l-calendar-plant-entry__header'>
        <Title title={plant.name} />
        <div className='l-calendar-plant-entry-header__menu-btn'>
          <CalendarEntryMenu plant={plant} />
        </div>
      </div>
      <div className='l-calendar-plant-entry__desc'>
        <Subtitle subtitle={desc} />
      </div>
      <div className='l-calendar-plant-entry__category'>
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

export default CalendarPlantEntry;

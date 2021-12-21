import React from 'react';
import { useAppSelector } from '../../redux/typed-hooks';
import { selectPlantById } from '../../redux/reducers/index';
import Title from '../01-atoms/Title/Title';
import Subtitle from '../01-atoms/Subtitle/Subtitle';
import Tag from '../01-atoms/Tag/Tag';
import CalendarEntryMenu from './CalendarEntryMenu';
import CalendarChart from './CalendarChart';

type CalendarPlantEntryProps = {
  plantId: string;
};

const CalendarPlantEntry = ({
  plantId
}: CalendarPlantEntryProps): JSX.Element | null => {
  const plant = useAppSelector(state => selectPlantById(state, plantId));

  if (!plant) return null;

  const { name, desc, category, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    plant;

  return (
    <div className='m-calendar-plant-entry'>
      <div className='l-calendar-plant-entry__header'>
        <Title title={name} />
        <div className='l-calendar-plant-entry-header__menu-btn'>
          <CalendarEntryMenu plantId={plantId} plantName={name} />
        </div>
      </div>
      <div className='l-calendar-plant-entry__desc'>
        <Subtitle subtitle={desc} />
      </div>
      <div className='l-calendar-plant-entry__category'>
        <div className='h-visually-hidden'>Category:</div>
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

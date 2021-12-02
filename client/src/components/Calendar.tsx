import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredSortedPlantIds } from '../redux/reducers/index';
import NoPlants from './02-molecules/NoPlants';
import PlantEntry from './PlantEntry';
import CalendarCaption from './CalendarCaption';
import StatusMessage from './StatusMessage';

const Calendar = (): JSX.Element => {
  const plantIds = useSelector(selectFilteredSortedPlantIds);

  if (plantIds.length === 0) return <NoPlants />;

  const plantListItems = plantIds.map(plantId => (
    <li key={plantId} className='l-calendar__list-item'>
      <PlantEntry plantId={plantId} />
    </li>
  ));

  return (
    <div
      className='c-calendar l-calendar'
      role='region'
      id='calendar'
      aria-label='Calendar'
      aria-live='polite'
    >
      <StatusMessage />
      <ul className='c-calendar__list'>{plantListItems}</ul>
      <div className='l-calendar__caption'>
        <CalendarCaption noOfPlants={plantListItems.length} />
      </div>
    </div>
  );
};

export default Calendar;

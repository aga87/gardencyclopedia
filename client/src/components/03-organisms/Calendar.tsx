import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredSortedPlantIds } from '../../redux/reducers/index';
import NoPlants from '../02-molecules/NoPlants';
import CalendarPlantEntry from '../02-molecules/CalendarPlantEntry';
import CalendarCaption from '../02-molecules/CalendarCaption';
import StatusMessage from '../02-molecules/StatusMessage';

const Calendar = (): JSX.Element => {
  const plantIds = useSelector(selectFilteredSortedPlantIds);

  const plantListItems = plantIds.map(plantId => (
    <li key={plantId} className='l-calendar__list-item'>
      <CalendarPlantEntry plantId={plantId} />
    </li>
  ));

  const isEmpty = plantListItems.length === 0;

  return (
    <div
      className='o-calendar l-calendar'
      role='region'
      id='calendar'
      aria-label='Calendar'
      aria-live='polite'
    >
      {isEmpty ? (
        <div className='l-calendar__no-plants'>
          <NoPlants />
        </div>
      ) : (
        <div>
          <StatusMessage />
          <ul className='o-calendar__list'>{plantListItems}</ul>
          <div className='l-calendar__caption'>
            <CalendarCaption noOfPlants={plantListItems.length} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

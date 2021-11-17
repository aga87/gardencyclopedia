import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredSortedPlantIds } from '../redux/reducers/index';
import NoPlants from './NoPlants';
import PlantEntry from './PlantEntry';
import CalendarCaption from './CalendarCaption';

const Calendar = (): JSX.Element => {
  const plantIds = useSelector(selectFilteredSortedPlantIds);

  if (plantIds.length === 0)
    return (
      <div className='l-flex-centerY'>
        <NoPlants />
      </div>
    );

  const plantListItems = plantIds.map(plantId => (
    <li key={plantId} className='l-calendar__list-item'>
      <PlantEntry plantId={plantId} />
    </li>
  ));

  return (
    <figure className='c-calendar l-calendar'>
      <ul className='c-calendar__list'>{plantListItems}</ul>
      <figcaption className='l-calendar__caption'>
        <CalendarCaption noOfPlants={plantListItems.length} />
      </figcaption>
    </figure>
  );
};

export default Calendar;

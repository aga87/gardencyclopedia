import React from 'react';
import PlantEntry from './PlantEntry';
import CalendarCaption from './CalendarCaption';

type CalendarProps = {
  plants: Plant[];
};

const Calendar = ({ plants }: CalendarProps): JSX.Element => {
  const plantListItems = plants.map(plant => (
    <li key={plant._id} className='l-calendar__list-item'>
      <PlantEntry plant={plant} />
    </li>
  ));

  return (
    <figure className='c-calendar l-calendar'>
      <ul className='c-calendar__list'>{plantListItems}</ul>
      <div className='l-calendar__caption'>
        <CalendarCaption noOfPlants={plantListItems.length} />
      </div>
    </figure>
  );
};

export default Calendar;

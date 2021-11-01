import React from 'react';
import PlantEntry from './PlantEntry';

type CalendarProps = {
  plants: Plant[];
};

const Calendar = ({ plants }: CalendarProps): JSX.Element => {
  const plantListItems = plants.map(plant => (
    <li key={plant._id} className="c-calendar__plant-item">
      <PlantEntry plant={plant} />
    </li>
  ));

  return (
    <figure className="c-calendar">
      <ul className="c-calendar__plant-list">{plantListItems}</ul>
      <figcaption className="c-calendar__caption">
        {plantListItems.length} {plantListItems.length > 1 ? 'Plants' : 'Plant'}{' '}
      </figcaption>
    </figure>
  );
};

export default Calendar;

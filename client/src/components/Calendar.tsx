import React from 'react';
import PlantEntry from './PlantEntry';

type CalendarProps = {
  plants: Plant[];
};

const Calendar = ({ plants }: CalendarProps): JSX.Element => {
  const plantListItems = plants.map(plant => (
    <li key={plant._id}>
      <PlantEntry plant={plant} />
    </li>
  ));

  return (
    <figure>
      <ul>{plantListItems}</ul>
      <figcaption>{plantListItems.length} Plants</figcaption>
    </figure>
  );
};

export default Calendar;

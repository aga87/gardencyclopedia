import React from 'react';

type CalendarCaptionProps = {
  noOfPlants: number;
};

const CalendarCaption = ({ noOfPlants }: CalendarCaptionProps): JSX.Element => (
  <figcaption className='c-calendar-caption'>
    <details className='c-calendar-caption__details'>
      <summary className='c-calendar-caption__details-summary'>
        {noOfPlants} {noOfPlants > 1 ? 'Plants' : 'Plant'}
      </summary>
      <table>
        <tr>
          <th className='c-calendar-caption__legend-heading'>Sow</th>
          <th className='c-calendar-caption__legend-heading'>Harvest</th>
        </tr>
        <tr>
          <td className='c-calendar-caption__legend-sow' />
          <td className='c-calendar-caption__legend-harvest' />
        </tr>
      </table>
    </details>
  </figcaption>
);
export default CalendarCaption;

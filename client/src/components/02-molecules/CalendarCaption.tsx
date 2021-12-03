import React from 'react';

type CalendarCaptionProps = {
  noOfPlants: number;
};

const CalendarCaption = ({ noOfPlants }: CalendarCaptionProps): JSX.Element => (
  <div className='m-calendar-caption'>
    <details className='m-calendar-caption__details'>
      <summary className='m-calendar-caption__details-summary'>
        {noOfPlants} {noOfPlants === 1 ? 'Plant' : 'Plants'}
      </summary>
      <table>
        <caption className='m-calendar-caption__legend-caption'>Legend</caption>
        <thead>
          <tr>
            <th className='m-calendar-caption__legend-heading'>Sow</th>
            <th className='m-calendar-caption__legend-heading'>Harvest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='m-calendar-caption__legend-sow' />
            <td className='m-calendar-caption__legend-harvest' />
          </tr>
        </tbody>
      </table>
    </details>
  </div>
);

export default CalendarCaption;

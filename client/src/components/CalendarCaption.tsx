import React from 'react';

type CalendarCaptionProps = {
  noOfPlants: number;
};

const CalendarCaption = ({ noOfPlants }: CalendarCaptionProps): JSX.Element => (
  <div className='c-calendar-caption'>
    <details className='c-calendar-caption__details'>
      <summary className='c-calendar-caption__details-summary'>
        {noOfPlants} {noOfPlants === 1 ? 'Plant' : 'Plants'}
      </summary>
      <table>
        <caption className='c-calendar-caption__legend-caption'>Legend</caption>
        <thead>
          <tr>
            <th className='c-calendar-caption__legend-heading'>Sow</th>
            <th className='c-calendar-caption__legend-heading'>Harvest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='c-calendar-caption__legend-sow' />
            <td className='c-calendar-caption__legend-harvest' />
          </tr>
        </tbody>
      </table>
    </details>
  </div>
);

export default CalendarCaption;

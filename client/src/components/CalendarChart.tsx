import React from 'react';
import { months } from '../utils/constants';
import MonthlyDataRow from './MonthlyDataRow';

type CalendarChartProps = {
  sowFrom: Month;
  sowUntil: Month;
  harvestFrom: Month;
  harvestUntil: Month;
};

const CalendarChart = ({
  sowFrom,
  sowUntil,
  harvestFrom,
  harvestUntil
}: CalendarChartProps): JSX.Element => {
  const monthHeadings = months.map(month => (
    <th className='c-calendar-chart__heading' key={month}>
      {month.slice(0, 3)}
    </th>
  ));

  return (
    <table className='c-calendar-chart'>
      <thead>
        <tr>{monthHeadings}</tr>
      </thead>
      <tbody>
        <MonthlyDataRow
          variant='sow'
          monthStart={sowFrom}
          monthEnd={sowUntil}
        />
        <MonthlyDataRow
          variant='harvest'
          monthStart={harvestFrom}
          monthEnd={harvestUntil}
        />
      </tbody>
    </table>
  );
};

export default CalendarChart;

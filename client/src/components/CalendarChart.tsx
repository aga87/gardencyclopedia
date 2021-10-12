import React from 'react';
import { months } from '../utils/constants';
import MonthData from './MonthData';

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
    <th key={month}>{month.slice(0, 3)}</th>
  ));

  return (
    <table>
      <thead>
        <tr>{monthHeadings}</tr>
      </thead>
      <tbody>
        <tr>
          <MonthData monthStart={sowFrom} monthEnd={sowUntil} />
        </tr>
        <tr>
          <MonthData monthStart={harvestFrom} monthEnd={harvestUntil} />
        </tr>
      </tbody>
    </table>
  );
};

export default CalendarChart;

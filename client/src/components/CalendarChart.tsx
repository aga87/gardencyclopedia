import React from 'react';
import { months } from '../utils/constants';
import { getAccessibleChartLabel } from '../utils/text-utils';
import MonthlyDataRow from './00-ions/MonthlyDataRow';

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

  const accessibleChartLabel = getAccessibleChartLabel(
    sowFrom,
    sowUntil,
    harvestFrom,
    harvestUntil
  );

  return (
    <div>
      <p className='h-visually-hidden'>{accessibleChartLabel}</p>
      <table className='c-calendar-chart' role='presentation'>
        <thead aria-hidden='true'>
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
    </div>
  );
};

export default CalendarChart;

import React from 'react';
import { months } from '../../utils/constants';
import {
  getSowingDataLabel,
  getHarvestDataLabel
} from '../../utils/text-utils';
import MonthlyDataRow from '../00-ions/MonthlyDataRow';

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
    <th className='m-calendar-chart__heading' key={month}>
      {month.slice(0, 3)}
    </th>
  ));

  const accessibleChartLabel = `${getSowingDataLabel({
    sowFrom,
    sowUntil
  })} ${getHarvestDataLabel({ harvestFrom, harvestUntil })}`;

  return (
    <figure aria-label='chart'>
      <figcaption className='h-visually-hidden'>
        {accessibleChartLabel}
      </figcaption>
      <table className='m-calendar-chart' aria-hidden='true'>
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
    </figure>
  );
};

export default CalendarChart;

import React from 'react';
import { months } from '../utils/constants';
import { toZeroOnesArr } from '../utils/plants-utils';

type MonthlyDataRowProps = {
  variant: 'sow' | 'harvest';
  monthStart: Month;
  monthEnd: Month;
};

const MonthlyDataRow = ({
  variant,
  monthStart,
  monthEnd
}: MonthlyDataRowProps): JSX.Element => {
  const className = `month-data month-data--${variant}`;

  const tabularMonthData = toZeroOnesArr(monthStart, monthEnd, months);
  const monthDataRow = tabularMonthData.map((data, i) => {
    if (data === 0) return <td key={months[i]} className='month-data' />;
    return <td key={months[i]} className={className} />;
  });

  return (
    <>
      <tr>{monthDataRow}</tr>
    </>
  );
};

export default MonthlyDataRow;

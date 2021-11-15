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
  const monthDataRow = tabularMonthData.map(data => {
    if (data === 0) return <td className='month-data' />;
    return <td className={className} />;
  });

  return <><tr>{monthDataRow}</tr></>;
};

export default MonthlyDataRow;

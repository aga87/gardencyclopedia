import React from 'react';
import { toZeroOnesArr } from '../../utils/plants-utils';
import { months } from '../../utils/constants';

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
  const className = `monthly-data monthly-data--${variant}`;

  const tabularMonthData = toZeroOnesArr(monthStart, monthEnd);
  const monthDataRow = tabularMonthData.map((data, i) => {
    if (data === 0) return <td key={months[i]} className='monthly-data' />;
    return <td key={months[i]} className={className} />;
  });

  return (
    <>
      <tr>{monthDataRow}</tr>
    </>
  );
};

export default MonthlyDataRow;

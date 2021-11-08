import React from 'react';
import { months } from '../../utils/constants';

type MonthlyDataRowProps = {
  variant: 'sow' | 'harvest';
  monthStart: Month;
  // monthStart: '' | 'January' | 'February' | 'March';

  monthEnd: Month;
};

const MonthlyDataRow = ({
  variant,
  monthStart,
  monthEnd
}: MonthlyDataRowProps): JSX.Element => {
  const className = `monthly-data monthly-data--${variant}`;

  const firstIndex = months.indexOf(monthStart);
  const lastIndex = months.indexOf(monthEnd);
  const dataIsMissing = firstIndex === -1 || lastIndex === -1;

  const monthRow = months.map((month, i) => {
    if (dataIsMissing) return <td key={month} className='monthly-data' />;
    if (firstIndex < lastIndex) {
      if (i >= firstIndex && i <= lastIndex)
        return <td key={month} className={className} />;
      return <td key={month} className='monthly-data' />;
    }
    if (firstIndex > lastIndex) {
      if (i <= lastIndex) return <td key={month} className={className} />;
      if (i > lastIndex && i < firstIndex)
        return <td key={month} className='monthly-data' />;
      return <td key={month} className={className} />;
    }
    // if equal
    if (i === firstIndex) return <td key={month} className={className} />;
    return <td key={month} className='monthly-data' />;
  });

  return <><tr>{monthRow}</tr></>;
};

export default MonthlyDataRow;

import React from 'react';
import { months } from '../utils/constants';

type MonthDataProps = {
  variant: 'sow' | 'harvest';
  monthStart: Month;
  monthEnd: Month;
};

const MonthData = ({
  variant,
  monthStart,
  monthEnd
}: MonthDataProps): JSX.Element => {
  const className = `month-data month-data--${variant}`;

  const firstIndex = months.indexOf(monthStart);
  const lastIndex = months.indexOf(monthEnd);
  const dataIsMissing = firstIndex === -1 || lastIndex === -1;

  const monthRow = months.map((month, i) => {
    if (dataIsMissing) return <td key={month} className="month-data" />;
    if (firstIndex < lastIndex) {
      if (i >= firstIndex && i <= lastIndex)
        return <td key={month} className={className} />;
      return <td key={month} className="month-data" />;
    }
    if (firstIndex > lastIndex) {
      if (i <= lastIndex) return <td key={month} className={className} />;
      if (i > lastIndex && i < firstIndex)
        return <td key={month} className="month-data" />;
      return <td key={month} className={className} />;
    }
    // if equal
    if (i === firstIndex) return <td key={month} className={className} />;
    return <td key={month} className="month-data" />;
  });

  return <>{monthRow}</>;
};

export default MonthData;

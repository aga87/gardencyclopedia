import React from 'react';
import { months } from '../utils/constants';

// array of month strings in readonly mode
const monthsArr = ['', ...months] as const;

type MonthDataProps = {
  monthStart: typeof monthsArr[number];
  monthEnd: typeof monthsArr[number];
};

const MonthData = ({ monthStart, monthEnd }: MonthDataProps): JSX.Element => {
  const firstIndex = months.indexOf(monthStart);
  const lastIndex = months.indexOf(monthEnd);
  const dataIsMissing = firstIndex === -1 || lastIndex === -1;

  const monthRow = months.map((month, i) => {
    if (dataIsMissing) return <td key={month}>no</td>;
    if (firstIndex < lastIndex) {
      if (i >= firstIndex && i <= lastIndex) return <td key={month}>yes</td>;
      return <td key={month}>no</td>;
    }
    if (firstIndex > lastIndex) {
      if (i <= lastIndex) return <td key={month}>yes</td>;
      if (i > lastIndex && i < firstIndex) return <td key={month}>no</td>;
      return <td key={month}>yes</td>;
    }
    // if equal
    if (i === firstIndex) return <td key={month}>yes</td>;
    return <td key={month}>no</td>;
  });

  return <>{monthRow}</>;
};

export default MonthData;
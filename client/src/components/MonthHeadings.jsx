import React from 'react';
import { months } from '../utils/constants';

const MonthHeadings = () => {
  const headings = months.map(month => (
    <th key={month}>{month.slice(0, 3)}</th>
  ));

  return <>{headings}</>;
};

export default MonthHeadings;

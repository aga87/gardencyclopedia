import React from 'react';
import PropTypes from 'prop-types';
import { months } from '../utils/constants';

const MonthData = props => {
  const { monthStart, monthEnd } = props;

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

MonthData.propTypes = {
  monthStart: PropTypes.oneOf(['', ...months]).isRequired,
  monthEnd: PropTypes.oneOf(['', ...months]).isRequired
};

export default MonthData;

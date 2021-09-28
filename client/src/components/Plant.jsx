import PropTypes from 'prop-types';
import React from 'react';
import { months, plantCategories } from '../utils/constants';
import MonthHeadings from './MonthHeadings';
import MonthData from './MonthData';
import DeletePlantBtn from './DeletePlantBtn';

const Plant = props => {
  const {
    name,
    id,
    desc,
    category,
    sowFrom,
    sowUntil,
    harvestFrom,
    harvestUntil
  } = props;

  return (
    <figure>
      <figcaption>
        <h1>{name}</h1>
        <p>{desc}</p>
        <p>{category || 'Uncategorised'}</p>
      </figcaption>
      <table>
        <thead>
          <tr>
            <MonthHeadings />
          </tr>
        </thead>
        <tbody>
          <tr>
            <MonthData monthStart={sowFrom} monthEnd={sowUntil} />
          </tr>
          <tr>
            <MonthData monthStart={harvestFrom} monthEnd={harvestUntil} />
          </tr>
        </tbody>
      </table>
      <DeletePlantBtn id={id} />
    </figure>
  );
};

Plant.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.oneOf(['', ...plantCategories]).isRequired,
  sowFrom: PropTypes.oneOf(['', ...months]).isRequired,
  sowUntil: PropTypes.oneOf(['', ...months]).isRequired,
  harvestFrom: PropTypes.oneOf(['', ...months]).isRequired,
  harvestUntil: PropTypes.oneOf(['', ...months]).isRequired
};

export default Plant;

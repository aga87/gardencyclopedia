import PropTypes from 'prop-types';
import React from 'react';
import DeletePlantBtn from './DeletePlantBtn';
import { months, plantCategories } from '../utils/constants';

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
      <h1>{name}</h1>
      <p>{desc}</p>
      <p>{category || 'Uncategorised'}</p>
      <DeletePlantBtn id={id} />
      <p>Sow from: {sowFrom}</p>
      <p>Sow until: {sowUntil}</p>
      <p>Harvest from: {harvestFrom}</p>
      <p>Harvest until: {harvestUntil}</p>
    </figure>
  );
};

Plant.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  category: PropTypes.oneOf(['', ...plantCategories]).isRequired,
  sowFrom: PropTypes.oneOf(['', ...months]).isRequired,
  sowUntil: PropTypes.oneOf(['', ...months]).isRequired,
  harvestFrom: PropTypes.oneOf(['', ...months]).isRequired,
  harvestUntil: PropTypes.oneOf(['', ...months]).isRequired
};

Plant.defaultProps = {
  desc: ''
};

export default Plant;

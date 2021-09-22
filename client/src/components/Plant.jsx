import PropTypes from 'prop-types';
import React from 'react';
import DeletePlantBtn from './DeletePlantBtn';
import { plantCategories } from '../utils/constants';

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
      <p>{category}</p>
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
  category: PropTypes.oneOf(plantCategories),
  sowFrom: PropTypes.string,
  sowUntil: PropTypes.string,
  harvestFrom: PropTypes.string,
  harvestUntil: PropTypes.string
};

Plant.defaultProps = {
  desc: '',
  category: plantCategories[0],
  sowFrom: null,
  sowUntil: null,
  harvestFrom: null,
  harvestUntil: null
};

export default Plant;

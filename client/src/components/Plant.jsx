import PropTypes from 'prop-types';
import React from 'react';
import DeletePlantBtn from './DeletePlantBtn';

const Plant = props => {
  const { name, id, desc, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    props;

  return (
    <figure>
      <h1>{name}</h1>
      <p>{desc}</p>
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
  sowFrom: PropTypes.string,
  sowUntil: PropTypes.string,
  harvestFrom: PropTypes.string,
  harvestUntil: PropTypes.string
};

Plant.defaultProps = {
  desc: '',
  sowFrom: '',
  sowUntil: '',
  harvestFrom: '',
  harvestUntil: ''
};

export default Plant;

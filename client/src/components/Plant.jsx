import PropTypes from 'prop-types';
import React from 'react';
import DeletePlantBtn from './DeletePlantBtn';

const Plant = props => {
  const { name, id } = props;

  return (
    <figure>
      <h1>{name}</h1>
      <DeletePlantBtn id={id} />
    </figure>
  );
};

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Plant;

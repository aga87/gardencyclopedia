import PropTypes from 'prop-types';
import React from 'react';
import DeletePlantBtn from './DeletePlantBtn';

const Plant = props => {
  const { name, id, desc, sowFrom } = props;

  return (
    <figure>
      <h1>{name}</h1>
      <p>{desc}</p>
      <DeletePlantBtn id={id} />
      <p>Sow from: {sowFrom}</p>
    </figure>
  );
};

Plant.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  sowFrom: PropTypes.string
};

Plant.defaultProps = {
  desc: '',
  sowFrom: ''
};

export default Plant;

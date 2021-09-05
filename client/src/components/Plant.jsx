import PropTypes from 'prop-types';
import React from 'react';
import DeletePlantBtn from './DeletePlantBtn';

const Plant = props => {
  const { name, id, desc, sowFrom, sowUntil } = props;

  return (
    <figure>
      <h1>{name}</h1>
      <p>{desc}</p>
      <DeletePlantBtn id={id} />
      <p>Sow from: {sowFrom}</p>
      <p>Sow until: {sowUntil}</p>
    </figure>
  );
};

Plant.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  sowFrom: PropTypes.string,
  sowUntil: PropTypes.string
};

Plant.defaultProps = {
  desc: '',
  sowFrom: '',
  sowUntil: ''
};

export default Plant;

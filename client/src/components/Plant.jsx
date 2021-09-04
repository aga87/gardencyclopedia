import PropTypes from 'prop-types';
import React from 'react';

const Plant = props => {
  const { name } = props;

  return (
    <figure>
      <h1>{name}</h1>
    </figure>
  );
};

Plant.propTypes = {
  name: PropTypes.string.isRequired
};

export default Plant;

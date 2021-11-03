import React from 'react';

type PlantDescProps = {
  desc: string;
};

const PlantDesc = ({ desc }: PlantDescProps): JSX.Element => (
  <p className='plant-desc'>{desc}</p>
);

export default PlantDesc;

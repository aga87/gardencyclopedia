import React from 'react';

type DescriptionProps = {
  text: string;
};

const Description = ({ text }: DescriptionProps): JSX.Element => (
  <p className='plant-desc'>{text}</p>
);

export default Description;

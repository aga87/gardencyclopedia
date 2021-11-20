import React from 'react';

type PlantEntryTitleProps = {
  title: string;
};

const PlantEntryTitle = ({ title }: PlantEntryTitleProps): JSX.Element => (
  <h2 className='plant-entry-title'>{title}</h2>
);

export default PlantEntryTitle;

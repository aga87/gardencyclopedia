import React from 'react';
import PlantMenu from './PlantMenu';

type PlantEntryHeaderProps = {
  plant: Plant;
};

const PlantEntryHeader = ({ plant }: PlantEntryHeaderProps): JSX.Element => (
  <header className='c-plant-entry-header l-plant-entry-header'>
    <h2 className='c-plant-entry-header__title'>{plant.name}</h2>
    <div className='l-plant-entry-header__menu-btn'>
      <PlantMenu plant={plant} />
    </div>
  </header>
);

export default PlantEntryHeader;

import React from 'react';
import Header from './02-molecules/Header';
import UpcomingFeatures from './UpcomingFeatures';

const GardenView = (): JSX.Element => (
  <div className='c-garden-view l-garden-view'>
    <Header variant='secondary' title='Garden' />
    <UpcomingFeatures
      features={[
        'Keep track of all plants in your garden.',
        'Record plant location, growing medium and conditions.',
        'Record your gardening progress for each plant.',
        'Record harvesting time and yields.',
        'Archive selected plants for future reference.'
      ]}
    />
  </div>
);

export default GardenView;

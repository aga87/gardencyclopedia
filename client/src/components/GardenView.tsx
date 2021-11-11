import React from 'react';
import Header from './Header';
import UpcomingFeatures from './UpcomingFeatures';

const GardenView = (): JSX.Element => (
  <div>
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

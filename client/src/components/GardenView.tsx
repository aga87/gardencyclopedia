import React from 'react';
import Icon from './nano/Icon';
import Logo from './nano/Logo';
import UpcomingFeatures from './UpcomingFeatures';

const GardenView = (): JSX.Element => (
  <div className='c-garden-view'>
    <Logo variant='light' />
    <h1 className='c-garden-view__title t1'>Garden</h1>
    <UpcomingFeatures
      features={[
        'Keep track of all plants in your garden.',
        'Record plant location, growing medium and conditions.',
        'Record your gardening progress for each plant.',
        'Record harvesting time and yields.',
        'Archive selected plants for future reference.'
      ]}
    />
    <Icon name='seedling' />
  </div>
);

export default GardenView;

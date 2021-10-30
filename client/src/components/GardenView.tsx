import React from 'react';
import Icon from './Icon';
import Logo from './Logo';

const GardenView = (): JSX.Element => {
  const upcomingFeatures = [
    'Keep track of all plants in your garden.',
    'Record plant location, growing medium and conditions.',
    'Record your gardening progress for each plant.',
    'Record harvesting time and yields.',
    'Archive selected plants for future reference.'
  ];

  const upcomingFeaturesListItems = upcomingFeatures.map(feature => (
    <li>{feature}</li>
  ));

  return (
    <div className="c-garden-view">
      <Logo variant="light" />
      <h1 className="c-garden-view__title t1">
        Garden
        <br />
        <span className="c-garden-view__subtitle t3">Coming Soon:</span>
      </h1>
      <ul className="c-garden-view__list">{upcomingFeaturesListItems}</ul>
      <Icon name="seedling" />
    </div>
  );
};

export default GardenView;

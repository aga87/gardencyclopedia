import React from 'react';
import Icon from './Icon';

const Garden = (): JSX.Element => {
  const upcomingFeatures = [
    'Keep track of all plants in your garden.',
    'Record plant location, growing medium and conditions.',
    'Record your gardening progress for each plant.',
    'Record harvesting time and yields.',
    'Archive selected plants for future reference.'
  ];

  const upcomingFeaturesListItems = upcomingFeatures.map(feature => (
    <li>
      <Icon name="seedling" /> {feature}
    </li>
  ));

  return (
    <section className="c-garden">
      <h1 className="c-garden__title t1">
        <span className="c-garden__logo">
          <Icon name="seedling" />
        </span>
        <br />
        Garden
        <br /> Coming Soon:
      </h1>
      <ul className="c-garden__list">{upcomingFeaturesListItems}</ul>
    </section>
  );
};

export default Garden;

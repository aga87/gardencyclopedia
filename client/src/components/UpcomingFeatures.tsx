import React from 'react';

type UpcomingFeaturesProps = {
  features: string[];
};

const UpcomingFeatures = ({ features }: UpcomingFeaturesProps): JSX.Element => {
  const upcomingFeaturesListItems = features.map(feature => <li>{feature}</li>);

  return (
    <div className='c-upcoming-features'>
      <h2 className='c-upcoming-features__title'>Coming Soon:</h2>
      <ul className='c-upcoming-features__list'>{upcomingFeaturesListItems}</ul>
    </div>
  );
};

export default UpcomingFeatures;

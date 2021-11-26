import React from 'react';

export type PlantEntrySubtitleProps = {
  subtitle: string;
};

const PlantEntrySubtitle = ({
  subtitle
}: PlantEntrySubtitleProps): JSX.Element => (
  <p className='plant-entry-subtitle'>{subtitle}</p>
);

export default PlantEntrySubtitle;

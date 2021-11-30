import React from 'react';

type SubtitleProps = {
  subtitle: string;
};

const Subtitle = ({ subtitle }: SubtitleProps): JSX.Element => (
  <p className='subtitle'>{subtitle}</p>
);

export default Subtitle;

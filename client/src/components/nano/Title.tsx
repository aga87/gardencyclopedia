import React from 'react';

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps): JSX.Element => (
  <h2 className='title'>{title}</h2>
);

export default Title;

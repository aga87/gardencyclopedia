import React from 'react';
import Icon from './Icon';

const Loader = (): JSX.Element => (
  <div className='loader'>
    <span className='t3'>
      <Icon name='spinner' />
    </span>
    <br />
    <span className='s1'>Loading</span>
  </div>
);

export default Loader;
import React from 'react';
import Icon from './Icon';

const Loader = (): JSX.Element => (
  <div className='loader'>
    <div className='loader__icon'>
      <Icon name='spinner' />
    </div>
    <p className='loader__caption'>Loading</p>
  </div>
);

export default Loader;

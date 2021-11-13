import React from 'react';
import Icon from './Icon';

const Loader = (): JSX.Element => (
  <div className='loader'>
    <span className='loader__icon'>
      <Icon name='spinner' />
    </span>
    <br />
    <span className='loader__caption'>Loading</span>
  </div>
);

export default Loader;

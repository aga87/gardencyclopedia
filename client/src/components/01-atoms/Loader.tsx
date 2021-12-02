import React from 'react';
import Icon from './Icon';

const Loader = (): JSX.Element => (
  <div className='loader'>
    <div className='loader__icon'>
      <Icon name='spinner' />
    </div>
    <p className='loader__caption' role='status' aria-live='polite'>
      Loading
    </p>
  </div>
);

export default Loader;

import React from 'react';
import Icon from './Icon';

const Loader = (): JSX.Element => (
  <p className="loader">
    <span className="t3">
      <Icon name="spinner" />
    </span>
    <br />
    <span className="s1">Loading</span>
  </p>
);

export default Loader;

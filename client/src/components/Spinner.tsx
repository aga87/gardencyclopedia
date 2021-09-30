import React from 'react';
import Icon from './Icon';

type SpinnerProps = {
  isLoading: boolean;
};

const Spinner = ({ isLoading }: SpinnerProps): JSX.Element | null => {
  if (!isLoading) return null;
  return <Icon name="spinner" />;
};

export default Spinner;

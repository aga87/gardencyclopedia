import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../redux/reducers/index';

const Loader = () => {
  const isLoading = useSelector(getIsLoading);

  const status = isLoading ? 'Loading...' : 'Loaded';

  return <p>{status}</p>;
};

export default Loader;

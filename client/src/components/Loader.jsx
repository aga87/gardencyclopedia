import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/reducers/index';

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  const status = isLoading ? 'Loading...' : 'Loaded';

  return <p>{status}</p>;
};

export default Loader;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectAllPlants,
  selectFilter
} from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantsActions';
import PlantList from './PlantList';

const Plants = (): JSX.Element => {
  const plants = useSelector(selectAllPlants);
  const filter = useSelector(selectFilter);
  const plantsAreLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  return (
    <PlantList isLoading={plantsAreLoading} plants={plants} filter={filter} />
  );
};

export default Plants;

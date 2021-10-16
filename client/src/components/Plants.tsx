import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectAllPlants,
  selectFilter,
  selectSort,
  selectIsAuthenticated
} from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantsActions';
import PlantList from './PlantList';

const Plants = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const plants = useSelector(selectAllPlants);
  const filter = useSelector(selectFilter);
  const sort = useSelector(selectSort);
  const plantsAreLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch, isAuthenticated]);

  return (
    <PlantList
      isLoading={plantsAreLoading}
      plants={plants}
      filter={filter}
      sort={sort}
    />
  );
};

export default Plants;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuthenticated,
  selectIsLoading,
  selectAllPlants,
  selectFilter,
  selectSort
} from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantsActions';
import { months } from '../utils/constants';
import { sortPlants } from '../utils/plants-utils';
import Loader from './nano/Loader';
import NoPlants from './NoPlants';
import Calendar from './Calendar';

const CalendarView = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);
  const plants = useSelector(selectAllPlants);
  const filter: Category = useSelector(selectFilter);
  const sort: Sort = useSelector(selectSort);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch, isAuthenticated]);

  // Filter
  const filteredPlants = plants.filter(plant => {
    if (!filter) return plants;
    return plant.category === filter;
  });
  // Sort
  const sortedFilteredPlants = sortPlants(filteredPlants, sort, months);

  if (isLoading)
    return (
      <div className='l-flex-centerY'>
        <Loader />
      </div>
    );
  if (sortedFilteredPlants.length === 0)
    return (
      <div className='l-flex-centerY'>
        <NoPlants />
      </div>
    );
  return <Calendar plants={sortedFilteredPlants} />;
};

export default CalendarView;

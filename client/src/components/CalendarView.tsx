import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectFilteredSortedPlants
} from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantsActions';
import Loader from './nano/Loader';
import NoPlants from './NoPlants';
import Calendar from './Calendar';

const CalendarView = (): JSX.Element => {
  const isLoading = useSelector(selectIsLoading);
  const filteredSortedPlants = useSelector(selectFilteredSortedPlants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  if (isLoading)
    return (
      <div className='l-flex-centerY'>
        <Loader />
      </div>
    );
  if (filteredSortedPlants.length === 0)
    return (
      <div className='l-flex-centerY'>
        <NoPlants />
      </div>
    );
  return <Calendar plants={filteredSortedPlants} />;
};

export default CalendarView;

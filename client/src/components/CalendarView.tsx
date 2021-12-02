import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectIsLoading } from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantsActions';
import Loader from './nano/Loader';
import Calendar from './Calendar';

const CalendarView = (): JSX.Element => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return <Calendar />;
};

export default CalendarView;

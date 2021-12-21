import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/typed-hooks';
import { selectIsLoading } from '../../redux/reducers/index';
import { getPlants } from '../../redux/actions/plantsActions';
import Loader from '../01-atoms/Loader/Loader';
import Calendar from './Calendar';

const CalendarWithLoading = (): JSX.Element => {
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return <Calendar />;
};

export default CalendarWithLoading;

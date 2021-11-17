import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/reducers/index';
import { getPlants } from '../redux/actions/plantsActions';
import Loader from './nano/Loader';
import Calendar from './Calendar';

const CalendarView = (): JSX.Element => {
  const isLoading = useSelector(selectIsLoading);
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

  return <Calendar />;
};

export default CalendarView;

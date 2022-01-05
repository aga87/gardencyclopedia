import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/typed-hooks';
import {
  selectIsLoading,
  selectFilteredSortedPlantIds
} from '../../../redux/reducers/index';
import { getPlants } from '../../../redux/actions/plantsActions';
import Loader from '../../01-atoms/Loader/Loader';
import CalendarPlantEntry from '../../02-molecules/CalendarPlantEntry';
import NoPlants from '../../02-molecules/NoPlants';
import CalendarCaption from '../../02-molecules/CalendarCaption/CalendarCaption';
import StatusMessage from '../../02-molecules/StatusMessage';

const CalendarWithLoading = (): JSX.Element => {
  const isLoading = useAppSelector(selectIsLoading);
  const plantIds = useAppSelector(selectFilteredSortedPlantIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  const plantListItems = plantIds.map(plantId => (
    <li key={plantId} className='l-calendar__list-item'>
      <CalendarPlantEntry plantId={plantId} />
    </li>
  ));

  const isEmpty = plantListItems.length === 0;

  if (isLoading) return <Loader />;

  return (
    <div
      className='o-calendar l-calendar'
      role='region'
      id='calendar'
      aria-label='Calendar'
      aria-live='polite'
    >
      {isEmpty ? (
        <div className='l-calendar__no-plants'>
          <NoPlants />
        </div>
      ) : (
        <div>
          <StatusMessage />
          <ul className='o-calendar__list'>{plantListItems}</ul>
          <div className='l-calendar__caption'>
            <CalendarCaption noOfPlants={plantListItems.length} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWithLoading;

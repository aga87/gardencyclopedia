import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantsActions';
import { openPlantModal } from '../redux/actions/uiActions';
import MonthHeadings from './MonthHeadings';
import MonthData from './MonthData';
import Btn from './Btn';
import type { Plant } from '../utils/common-types';

type PlantEntryProps = {
  plant: Plant;
};

const PlantEntry = ({ plant }: PlantEntryProps): JSX.Element => {
  const dispatch = useDispatch();
  const { name, desc, category, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    plant;
  const id = plant._id;

  const handleDeleteClick = () => {
    dispatch(deletePlant(id));
  };

  const handleEditClick = () => {
    dispatch(openPlantModal(plant));
  };

  return (
    <figure>
      <figcaption>
        <h1>{name}</h1>
        <p>{desc}</p>
        <p>{category}</p>
      </figcaption>
      <table>
        <thead>
          <tr>
            <MonthHeadings />
          </tr>
        </thead>
        <tbody>
          <tr>
            <MonthData monthStart={sowFrom} monthEnd={sowUntil} />
          </tr>
          <tr>
            <MonthData monthStart={harvestFrom} monthEnd={harvestUntil} />
          </tr>
        </tbody>
      </table>
      <Btn text="Delete plant" handleClick={handleDeleteClick} />
      <Btn text="Edit plant" handleClick={handleEditClick} />
    </figure>
  );
};

export default PlantEntry;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantsActions';
import { openPlantModal } from '../redux/actions/uiActions';
import MonthHeadings from './MonthHeadings';
import MonthData from './MonthData';
import Btn from './Btn';
import Icon from './Icon';

type PlantEntryProps = {
  plant: Plant;
};

const PlantEntry = ({ plant }: PlantEntryProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { name, desc, category, sowFrom, sowUntil, harvestFrom, harvestUntil } =
    plant;
  const id = plant._id;

  const handleDeleteClick = () => {
    dispatch(deletePlant(id as string));
  };

  const handleEditClick = () => {
    dispatch(openPlantModal(plant));
  };

  const handleMoreClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <h2>{name}</h2>
        <Btn icon={<Icon name="more" />} handleClick={handleMoreClick} />
        {isOpen && (
          <ul>
            <li>
              <Btn icon={<Icon name="trash" />} text="Delete" handleClick={handleDeleteClick} />
            </li>
            <li>
              <Btn icon={<Icon name="edit" />} text="Edit" handleClick={handleEditClick} />
            </li>
          </ul>
        )}
      </header>
      <p>{desc}</p>
      <p>{category}</p>
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
    </div>
  );
};

export default PlantEntry;

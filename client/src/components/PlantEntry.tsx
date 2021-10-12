import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantsActions';
import { openPlantModal } from '../redux/actions/uiActions';
import CalendarChart from './CalendarChart';
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
              <Btn
                icon={<Icon name="trash" />}
                text="Delete"
                handleClick={handleDeleteClick}
              />
            </li>
            <li>
              <Btn
                icon={<Icon name="edit" />}
                text="Edit"
                handleClick={handleEditClick}
              />
            </li>
          </ul>
        )}
      </header>
      <p>{desc}</p>
      <p>{category}</p>
      <CalendarChart
        sowFrom={sowFrom}
        sowUntil={sowUntil}
        harvestFrom={harvestFrom}
        harvestUntil={harvestUntil}
      />
    </div>
  );
};

export default PlantEntry;

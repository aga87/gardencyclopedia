import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantsActions';
import { openPlantModal } from '../redux/actions/uiActions';
import Btn from './Btn';
import Icon from './Icon';

type PlantMenuProps = {
  plant: Plant;
};

const PlantMenu = ({ plant }: PlantMenuProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDeleteClick = () => {
    setIsExpanded(false);
    dispatch(deletePlant(plant._id as string));
  };

  const handleEditClick = () => {
    setIsExpanded(false);
    dispatch(openPlantModal(plant));
  };

  return (
    <nav>
      <Btn icon={<Icon name="more" />} handleClick={handleMoreClick} />
      {isExpanded && (
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
    </nav>
  );
};

export default PlantMenu;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantsActions';
import { openEditPlantModal, setView } from '../redux/actions/uiActions';
import useComponentVisibility from '../utils/hooks/useComponentVisibility';
import DeleteConfirmationAlert from './DeleteConfirmationAlert';
import IconButton from './nano/IconButton';
import MenuDropdownButton from './nano/MenuDropdownButton';
import Icon from './nano/Icon';

type PlantMenuProps = {
  plant: Plant;
};

const PlantMenu = ({ plant }: PlantMenuProps): JSX.Element => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisibility(false); // Hide menu dropdown on click outside
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const dispatch = useDispatch();

  const handleMoreClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleAddToGarden = () => {
    dispatch(setView('garden'));
  };

  const handleDeleteClick = () => {
    setIsAlertVisible(true);
    setIsComponentVisible(false);
  };

  const handleConfirmDeleteClick = () => {
    dispatch(deletePlant(plant._id as string));
    setIsComponentVisible(false);
  };

  const handleCancelDeleteClick = () => {
    setIsAlertVisible(false);
  };

  const handleEditClick = () => {
    dispatch(openEditPlantModal(plant));
    setIsComponentVisible(false);
  };

  return (
    <div ref={ref}>
      {isAlertVisible && (
        <DeleteConfirmationAlert
          itemName={plant.name}
          handleCancel={handleCancelDeleteClick}
          handleDelete={handleConfirmDeleteClick}
        />
      )}
      <nav className='c-plant-menu l-plant-menu'>
        <IconButton
          variant='secondary'
          icon={<Icon name='more' />}
          ariaLabel={`Open ${plant.name} options`}
          handleClick={handleMoreClick}
        />
        <div>
          {isComponentVisible && (
            <ul className='c-plant-menu__dropdown l-plant-menu__dropdown'>
              <li>
                <MenuDropdownButton
                  icon={<Icon name='seedling' />}
                  text='Plant'
                  handleClick={handleAddToGarden}
                />
              </li>
              <li>
                <MenuDropdownButton
                  icon={<Icon name='edit' />}
                  text='Edit'
                  handleClick={handleEditClick}
                />
              </li>
              <li>
                <MenuDropdownButton
                  icon={<Icon name='trash' />}
                  text='Delete'
                  handleClick={handleDeleteClick}
                />
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default PlantMenu;

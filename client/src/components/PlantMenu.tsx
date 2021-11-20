import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantsActions';
import { openEditPlantModal, setView } from '../redux/actions/uiActions';
import useMenuDropdown from '../utils/hooks/useMenuDropdown';
import DeleteConfirmationAlert from './DeleteConfirmationAlert';
import MenuDropdownToggleButton from './nano/MenuDropdownToggleButton';
import MenuDropdownButton from './nano/MenuDropdownButton';
import Icon from './nano/Icon';
import plantsReducer from '../redux/reducers/plantsReducer';

type PlantMenuProps = {
  plant: Plant;
};

const PlantMenu = ({ plant }: PlantMenuProps): JSX.Element => {
  const menuItems = ['plant', 'edit', 'delete'];
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
    toggleButtonRef,
    menuItemsRefs,
    handleMenuToggleKeyDown,
    handleMenuKeyDown
  } = useMenuDropdown(menuItems);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
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
          id={`delete-alert${plant._id}`}
          handleCancel={handleCancelDeleteClick}
          handleDelete={handleConfirmDeleteClick}
        />
      )}
      <nav className='c-plant-menu l-plant-menu'>
        <MenuDropdownToggleButton
          ref={toggleButtonRef}
          variant='secondary'
          icon={<Icon name='more' />}
          ariaLabel={
            isComponentVisible ? `Open ${plant.name} options` : 'Close options'
          }
          handleClick={handleMenuClick}
          handleKeyDown={handleMenuToggleKeyDown}
          id={`plant-menu-dropdown-button-${plant._id}`}
          dropdownId={`plant-menu-dropdown-${plant._id}`}
        />
        <div>
          {isComponentVisible && (
            <ul
              className='c-plant-menu__dropdown l-plant-menu__dropdown'
              id={`plant-menu-dropdown-${plant._id}`}
              role='presentation'
              aria-labelledby={`plant-menu-dropdown-button-${plant._id}`}
            >
              <li>
                <MenuDropdownButton
                  icon={<Icon name='seedling' />}
                  text='Plant'
                  ref={menuRef => {
                    menuItemsRefs.current[0] = menuRef;
                  }}
                  handleClick={handleAddToGarden}
                  handleKeyDown={handleMenuKeyDown}
                />
              </li>
              <li>
                <MenuDropdownButton
                  icon={<Icon name='edit' />}
                  text='Edit'
                  ref={menuRef => {
                    menuItemsRefs.current[1] = menuRef;
                  }}
                  handleClick={handleEditClick}
                  handleKeyDown={handleMenuKeyDown}
                />
              </li>
              <li>
                <MenuDropdownButton
                  icon={<Icon name='trash' />}
                  text='Delete'
                  ref={menuRef => {
                    menuItemsRefs.current[2] = menuRef;
                  }}
                  handleClick={handleDeleteClick}
                  handleKeyDown={handleMenuKeyDown}
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

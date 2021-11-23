import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantsActions';
import { openEditPlantModal, setView } from '../redux/actions/uiActions';
import useMenuDropdown from '../utils/hooks/useMenuDropdown';
import ConfirmDeletionAlert from './ConfirmDeletionAlert';
import MenuDropdownToggleButton from './nano/MenuDropdownToggleButton';
import MenuDropdownButton from './nano/MenuDropdownButton';
import Icon from './nano/Icon';

type PlantMenuProps = {
  plant: Plant;
};

const PlantMenu = ({ plant }: PlantMenuProps): JSX.Element => {
  const menuItems = ['Plant', 'Edit', 'Delete'];
  const {
    ref,
    isComponentVisible,
    toggleButtonRef,
    menuItemsRefs,
    hideDropdown,
    handleMenuToggleClick,
    handleMenuToggleKeyDown,
    handleMenuKeyDown
  } = useMenuDropdown(menuItems);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const dispatch = useDispatch();

  const handleAddToGarden = () => {
    dispatch(setView('garden'));
  };

  const handleDeleteClick = () => {
    setIsAlertVisible(true);
    hideDropdown();
  };

  const handleConfirmDeleteClick = () => {
    dispatch(deletePlant(plant._id as string));
  };

  const handleCancelDeleteClick = () => {
    setIsAlertVisible(false);
  };

  const handleEditClick = () => {
    dispatch(openEditPlantModal(plant));
    hideDropdown();
  };

  return (
    <div ref={ref}>
      {isAlertVisible && (
        <ConfirmDeletionAlert
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
          handleClick={handleMenuToggleClick}
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
                  text={menuItems[0]}
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
                  text={menuItems[1]}
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
                  text={menuItems[2]}
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

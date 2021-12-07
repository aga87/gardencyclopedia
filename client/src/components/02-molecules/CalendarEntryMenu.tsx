import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/typed-hooks';
import { deletePlant } from '../../redux/actions/plantsActions';
import { openEditPlantModal, setView } from '../../redux/actions/uiActions';
import useMenuDropdown from '../../hooks/useMenuDropdown';
import DropdownToggleButton from '../01-atoms/buttons/DropdownToggleButton';
import MenuDropdownButton from '../01-atoms/buttons/MenuDropdownButton';
import ConfirmDeletionAlert from './ConfirmDeletionAlert';

type CalendarEntryMenuProps = {
  plantName: string;
  plantId: string;
};

const CalendarEntryMenu = ({
  plantName,
  plantId
}: CalendarEntryMenuProps): JSX.Element => {
  const menuItems = ['Plant', 'Edit', 'Delete'];
  const {
    ref,
    isOpen,
    toggleButtonRef,
    menuItemsRefs,
    hideDropdown,
    handleMenuToggleClick,
    handleMenuToggleKeyDown,
    handleMenuKeyDown
  } = useMenuDropdown(menuItems);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToGarden = () => {
    dispatch(setView('garden'));
  };

  const handleDeleteClick = () => {
    setIsAlertVisible(true);
    hideDropdown();
  };

  const handleConfirmDeleteClick = () => {
    dispatch(deletePlant(plantId));
  };

  const handleCancelDeleteClick = () => {
    setIsAlertVisible(false);
  };

  const handleEditClick = () => {
    dispatch(openEditPlantModal(plantId));
    hideDropdown();
  };

  return (
    <div ref={ref}>
      {isAlertVisible && (
        <ConfirmDeletionAlert
          itemName={plantName}
          id={`delete-alert${plantId}`}
          handleCancel={handleCancelDeleteClick}
          handleDelete={handleConfirmDeleteClick}
        />
      )}
      <nav className='m-calendar-entry-menu l-calendar-entry-menu'>
        <DropdownToggleButton
          ref={toggleButtonRef}
          variant='secondary'
          iconName='more'
          ariaLabel={isOpen ? 'Close options' : `Open ${plantName} options`}
          handleClick={handleMenuToggleClick}
          handleKeyDown={handleMenuToggleKeyDown}
          id={`plant-menu-dropdown-button-${plantId}`}
          dropdownId={`plant-menu-dropdown-${plantId}`}
        />
        <div>
          {isOpen && (
            <ul
              className='m-calendar-entry-menu__dropdown l-calendar-entry-menu__dropdown'
              id={`plant-menu-dropdown-${plantId}`}
              role='presentation'
              aria-labelledby={`plant-menu-dropdown-button-${plantId}`}
            >
              <li>
                <MenuDropdownButton
                  iconName='seedling'
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
                  iconName='edit'
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
                  iconName='trash'
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

export default CalendarEntryMenu;

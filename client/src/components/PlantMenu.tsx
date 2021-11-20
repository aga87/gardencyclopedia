import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantsActions';
import { openEditPlantModal, setView } from '../redux/actions/uiActions';
import { getNextIndex, getPreviousIndex } from '../utils/list-utils';
import useComponentVisibility from '../utils/hooks/useComponentVisibility';
import DeleteConfirmationAlert from './DeleteConfirmationAlert';
import MenuDropdownToggleButton from './nano/MenuDropdownToggleButton';
import MenuDropdownButton from './nano/MenuDropdownButton';
import Icon from './nano/Icon';

type PlantMenuProps = {
  plant: Plant;
};

const PlantMenu = ({ plant }: PlantMenuProps): JSX.Element => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisibility(false); // Hide menu dropdown on click outside
  const menuItems = ['plant', 'edit', 'delete'];
  const menuItemsRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const [focusedMenuItem, setFocusedMenuItem] = useState(0);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleMenuToggleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const { key } = e;
    console.log(key);
    switch (key) {
      case 'Down': // Edge
      case 'ArrowDown':
      case 'Space':
      case 'Enter': {
        e.preventDefault();
        setFocusedMenuItem(0);
        setIsComponentVisible(true);
        break;
      }
      case 'Up': // Edge
      case 'ArrowUp': {
        e.preventDefault();
        setFocusedMenuItem(menuItems.length - 1);
        setIsComponentVisible(true);
        break;
      }
      default:
    }
  };

  function handleMenuKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    const { key } = e;
    switch (key) {
      case 'Enter':
      case 'Space': {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        target.click();
        break;
      }
      case 'Esc': // Edge
      case 'Escape': {
        e.preventDefault();
        setIsComponentVisible(false);
        setFocusedMenuItem(-1);
        break;
      }
      case 'Up': // Edge
      case 'ArrowUp':
      case 'Left': // Edge
      case 'ArrowLeft': {
        e.preventDefault();
        const previousIndex = getPreviousIndex(focusedMenuItem, menuItems); // focus previous/ last
        setFocusedMenuItem(previousIndex);
        break;
      }
      case 'Down': // Edge
      case 'ArrowDown':
      case 'Right': // Edge
      case 'ArrowRight': {
        e.preventDefault();
        const nextIndex = getNextIndex(focusedMenuItem, menuItems); // focus next/ first
        setFocusedMenuItem(nextIndex);
        break;
      }
      case 'Home':
        e.preventDefault();
        setFocusedMenuItem(0);
        break;
      case 'End': {
        e.preventDefault();
        setFocusedMenuItem(menuItems.length - 1);
        break;
      }
      default:
    }
  }

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

  useEffect(() => {
    if (toggleButtonRef) {
      if (focusedMenuItem === -1) {
        const itemToFocus = toggleButtonRef.current as HTMLButtonElement;
        itemToFocus.focus();
      }
    }

    const menuItemToFocus = menuItemsRefs.current[
      focusedMenuItem
    ] as HTMLButtonElement;
    if (menuItemToFocus) {
      menuItemToFocus.focus();
    }
  }, [focusedMenuItem, isComponentVisible]);

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

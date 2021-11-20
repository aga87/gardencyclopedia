import React, { useState, useRef, useEffect } from 'react';
import useComponentVisibility from './useComponentVisibility';
import { getNextIndex, getPreviousIndex } from '../list-utils';

const useMenuDropdown = (menuItems: string[]) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisibility(false); // Hide menu dropdown on click outside
  const menuItemsRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const [focusedMenuItem, setFocusedMenuItem] = useState(0);

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

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
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
  };

  useEffect(() => {
    if (focusedMenuItem === -1) {
      if (toggleButtonRef) {
        const toggleButton = toggleButtonRef.current as HTMLButtonElement;
        toggleButton.focus();
      }
    } else {
      const menuItem = menuItemsRefs.current[
        focusedMenuItem
      ] as HTMLButtonElement;
      if (menuItem) {
        menuItem.focus();
      }
    }
  }, [focusedMenuItem, isComponentVisible]);

  return {
    ref,
    isComponentVisible,
    setIsComponentVisible,
    toggleButtonRef,
    menuItemsRefs,
    handleMenuToggleKeyDown,
    handleMenuKeyDown
  };
};

export default useMenuDropdown;

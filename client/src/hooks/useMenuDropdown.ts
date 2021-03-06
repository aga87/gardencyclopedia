import React, { useState, useRef, useEffect } from 'react';
import useCloseOnClickOutside from './useOnClickOutside';
import { getNextIndex, getPreviousIndex } from '../utils/list-utils';

type ReturnType = {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  isOpen: boolean;
  toggleButtonRef: React.MutableRefObject<HTMLButtonElement | null>;
  menuItemsRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  hideDropdown: () => void;
  handleMenuToggleClick: () => void;
  handleMenuToggleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  handleMenuKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const useMenuDropdown = (menuItems: string[]): ReturnType => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemsRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const [focusedMenuItem, setFocusedMenuItem] = useState(-1);
  // Hide menu dropdown on click outside
  const ref = useRef<HTMLDivElement>(null);
  useCloseOnClickOutside(ref, () => setIsOpen(false));

  const handleMenuToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const hideDropdown = () => {
    setIsOpen(false);
  };

  const handleMenuToggleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const { key } = e;
    switch (key) {
      case 'Down': // Edge
      case 'ArrowDown':
      case 'Space':
      case 'Enter': {
        e.preventDefault();
        setFocusedMenuItem(0);
        setIsOpen(true);
        break;
      }
      case 'Up': // Edge
      case 'ArrowUp': {
        e.preventDefault();
        setFocusedMenuItem(menuItems.length - 1);
        setIsOpen(true);
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
        setIsOpen(false);
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
  }, [focusedMenuItem, isOpen]);

  return {
    ref,
    isOpen,
    toggleButtonRef,
    menuItemsRefs,
    hideDropdown,
    handleMenuToggleClick,
    handleMenuToggleKeyDown,
    handleMenuKeyDown
  };
};

export default useMenuDropdown;

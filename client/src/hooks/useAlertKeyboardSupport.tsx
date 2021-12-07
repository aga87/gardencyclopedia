import React, { useState, useRef, useEffect, useCallback } from 'react';
import { getNextIndex, getPreviousIndex } from '../utils/list-utils';

type ReturnType = {
  refs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const useAlertKeyboardSupport = (
  modalItems: string[],
  handleCancel: () => void
): ReturnType => {
  const [focusedItem, setFocusedItem] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleCloseAlert = useCallback(
    (e: KeyboardEvent): void => {
      const { key } = e;
      switch (key) {
        case 'Escape':
          e.preventDefault();
          handleCancel();
          break;
        default:
      }
    },
    [handleCancel]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const { key } = e;
    switch (key) {
      case 'Enter':
      case 'Space': {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        target.click();
        break;
      }
      case 'Tab': {
        e.preventDefault();
        if (e.shiftKey) {
          const previousIndex = getPreviousIndex(focusedItem, modalItems); // focus previous/ last
          setFocusedItem(previousIndex);
        }
        const nextIndex = getNextIndex(focusedItem, modalItems); // focus next/ first
        setFocusedItem(nextIndex);
        break;
      }
      default:
    }
  };

  useEffect(() => {
    const itemToFocus = refs.current[focusedItem] as HTMLButtonElement;
    itemToFocus.focus();
  }, [focusedItem]);

  // Element that triggered alert dialog
  const activeElement = document.activeElement as HTMLButtonElement;

  useEffect(() => {
    window.addEventListener('keydown', handleCloseAlert);
    return () => {
      window.removeEventListener('keydown', handleCloseAlert);
      // If the element that triggered the alert dialog is still in the DOM, restore focus
      if (activeElement) {
        activeElement.focus();
      }
    };
  }, [activeElement, handleCloseAlert]);

  return { refs, handleKeyDown };
};

export default useAlertKeyboardSupport;

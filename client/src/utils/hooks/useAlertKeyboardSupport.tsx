import React, { useState, useRef, useEffect } from 'react';
import { getNextIndex, getPreviousIndex } from '../list-utils';

const useModalKeyboardSupport = (
  modalItems: string[],
  handleCancel: () => void
) => {
  const [focusedItem, setFocusedItem] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

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
      case 'Escape': {
        e.preventDefault();
        handleCancel();
        break;
      }
      default:
    }
  };

  useEffect(() => {
    const itemToFocus = refs.current[focusedItem] as HTMLButtonElement;
    itemToFocus.focus();
  }, [focusedItem]);

  return { refs, handleKeyDown };
};

export default useModalKeyboardSupport;

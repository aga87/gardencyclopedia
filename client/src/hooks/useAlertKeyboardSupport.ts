import { useState, useRef, useEffect } from 'react';
import { getNextIndex, getPreviousIndex } from '../utils/list-utils';
import useCloseOnEscapeKeyDown from './useCloseOnEscapeKeyDown';

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
  // Close with Escape key and restore focus // TODO: restore focus function
  useCloseOnEscapeKeyDown(handleCancel);

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

  return { refs, handleKeyDown };
};

export default useAlertKeyboardSupport;

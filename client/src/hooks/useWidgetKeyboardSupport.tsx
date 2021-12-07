import React, { useState, useRef, useEffect } from 'react';
import { getNextIndex, getPreviousIndex } from '../utils/list-utils';

type ReturnType = {
  widgetItemsRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const useWidgetKeyboardSupport = (
  widgetItems: string[],
  initialValue: number
): ReturnType => {
  const [focusedItem, setFocusedItem] = useState(initialValue);
  const widgetItemsRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Keyboard support: manage focus
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
      case 'Right': // Edge
      case 'ArrowRight':
      case 'Down': // Edge
      case 'ArrowDown': {
        e.preventDefault();
        const nextIndex = getNextIndex(focusedItem, widgetItems); // focus next/ first
        setFocusedItem(nextIndex);
        break;
      }
      case 'Left': // Edge
      case 'ArrowLeft':
      case 'Up': // Edge
      case 'ArrowUp': {
        e.preventDefault();
        const previousIndex = getPreviousIndex(focusedItem, widgetItems); // focus previous/ last
        setFocusedItem(previousIndex);
        break;
      }
      case 'Home':
        e.preventDefault();
        setFocusedItem(0); // focus first
        break;
      case 'End': {
        e.preventDefault();
        setFocusedItem(widgetItems.length - 1); // focus last
        break;
      }
      default:
    }
  };

  useEffect(() => {
    const widgetItemToFocus = widgetItemsRefs.current[
      focusedItem
    ] as HTMLButtonElement;
    if (!widgetItemToFocus) return;
    widgetItemToFocus.focus();
  }, [focusedItem]);

  return { widgetItemsRefs, handleKeyDown };
};

export default useWidgetKeyboardSupport;

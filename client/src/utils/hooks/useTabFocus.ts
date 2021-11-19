import React, { useState, useRef, useEffect } from 'react';
import { getNextIndex, getPreviousIndex } from '../list-utils';

/**
 * Tablist keyboard support -  focus management with roving tabindex
 */
const useTabFocus = (tabs: string[]) => {
  const [focusedTab, setFocusedTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Keyboard support: manage focus with roving tabindex
  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
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
      case 'ArrowRight': {
        e.preventDefault();
        const nextIndex = getNextIndex(focusedTab, tabs); // focus next/ first
        setFocusedTab(nextIndex);
        break;
      }
      case 'Left': // Edge
      case 'ArrowLeft': {
        e.preventDefault();
        const previousIndex = getPreviousIndex(focusedTab, tabs); // focus previous/ last
        setFocusedTab(previousIndex);
        break;
      }
      case 'Home':
        e.preventDefault();
        setFocusedTab(0); // focus first
        break;
      case 'End': {
        e.preventDefault();
        setFocusedTab(tabs.length - 1); // focus last
        break;
      }
      default:
    }
  }

  useEffect(() => {
    const tabToFocus = tabRefs.current[focusedTab] as HTMLButtonElement;
    tabToFocus.focus();
  }, [focusedTab]);

  return { tabRefs, handleKeyDown };
};

export default useTabFocus;

import { useEffect, useCallback } from 'react';

const useCloseOnEscapeKeyDown = (
  handleClose: () => void,
  restoreFocus?: () => void
): void => {
  const handleEscapeKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      const { key } = e;
      switch (key) {
        case 'Escape':
        case 'Esc': // Edge
          e.preventDefault();
          handleClose();
          break;
        default:
      }
    },
    [handleClose]
  );

  // Element that triggered the widget
  const activeElement = document.activeElement as HTMLElement;

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscapeKeyDown);
      // If the element that triggered the widget is still in the DOM, restore focus to that element
      if (activeElement) {
        activeElement.focus();
      } else if (restoreFocus) {
        restoreFocus();
      }
    };
  }, [activeElement, handleEscapeKeyDown, restoreFocus]);
};

export default useCloseOnEscapeKeyDown;

import React, { useState, useEffect, useRef } from 'react';

const useCloseOnClickOutside = (initialIsVisible: boolean) => {
  const [isOpen, setIsOpen] = useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  // (use native mouse event)
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isOpen, setIsOpen };
};

export default useCloseOnClickOutside;

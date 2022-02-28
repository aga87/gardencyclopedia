import React, { useState, useEffect } from 'react';

const useVisibilityTimeout = (delay: number, ...deps: unknown[]): boolean => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(
    () => {
      const timeId = setTimeout(() => {
        setIsVisible(false);
      }, delay);
      return () => {
        clearTimeout(timeId);
        setIsVisible(true);
      };
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [delay, ...deps]
  );

  return isVisible;
};

export default useVisibilityTimeout;

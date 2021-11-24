/**
 * Get the next index in a list
 */
export const getNextIndex = (currentIndex: number, list: any[]): number => {
  if (currentIndex < list.length - 1) return currentIndex + 1;
  return 0;
};

/**
 * Get the previous index in a list (array or NodeList)
 */
export const getPreviousIndex = (currentIndex: number, list: any[]): number => {
  if (currentIndex > 0) return currentIndex - 1;
  return list.length - 1;
};

/**
 * Capitalizes the first letter in a string
 * @param {string} str - string to capitalize
 * @returns capitalized string
 */
/* eslint-disable import/prefer-default-export */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

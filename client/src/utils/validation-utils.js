/** All validation functions:
 * Validate a controlled form field
 * @param {string} value - field value
 * @param {Object} validators - field constraints
 * @returns a custom error message
 */

export function validateName(value, validators) {
  if (validators.required === true && value.length === 0)
    return 'Give your plant a name.';
  if (value.length > validators.maxLength)
    return `Plant name cannot exceed ${validators.maxLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

export function validateDesc(value, validators) {
  if (value.length > validators.maxLength)
    return `Plant description cannot exceed ${validators.maxLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

export function validateSowFrom(value, validators) {
  if (validators.required === true && value.length === 0)
    return 'Specify the starting month of the sowing season.';
  return '';
}

export function validateSowUntil(value, validators) {
  if (validators.required === true && value.length === 0)
    return 'Specify the ending month of the sowing season.';
  return '';
}

export function validateHarvestFrom(value, validators) {
  if (validators.required === true && value.length === 0)
    return 'Specify the starting month of the harvesting season.';
  return '';
}

export function validateHarvestUntil(value, validators) {
  if (validators.required === true && value.length === 0)
    return 'Specify the ending month of the harvesting season.';
  return '';
}

/**
 * Validates a form field using Constraint Validation API
 * @param {HTML Element} field to validate
 * @returns a custom error message
 */

function validateField(field) {
  const { valid, tooLong, valueMissing } = field.validity;
  const inputName = field.getAttribute('name');
  if (valid) return '';
  if (valueMissing) {
    if (inputName === 'plantName') return 'Give your plant a name.';
    if (inputName === 'sowFrom')
      return 'Specify the starting month of the sowing season.';
    if (inputName === 'sowUntil')
      return 'Specify the ending month of the sowing season.';
    if (inputName === 'harvestFrom')
      return 'Specify the starting month of the harvesting season.';
    if (inputName === 'harvestUntil')
      return 'Specify the ending month of the harvesting season.';
  }
  if (tooLong) {
    const maxLength = field.getAttribute('maxLength');
    const inputValue = field.getAttribute('value');
    if (inputName === 'plantName')
      return `Plant name cannot exceed ${maxLength} characters. You are currently using ${inputValue.length} characters.`;
    if (inputName === 'plantDesc')
      return `Plant description cannot exceed ${maxLength} characters. You are currently using ${inputValue.length} characters.`;
  }
  return 'The value you entered for this field is invalid.';
}

export default validateField;

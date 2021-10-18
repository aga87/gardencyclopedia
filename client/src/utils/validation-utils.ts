// Types
type TextFieldValidator = {
  maxLength: number;
  required: boolean;
};

type MonthValidator = {
  required: boolean;
};

type PasswordValidator = {
  minLength: number;
  maxLength: number;
  required: boolean;
};

// Plant form validation

export function validateName(
  value: string,
  validators: TextFieldValidator
): string {
  if (validators.required === true && value.length === 0)
    return 'Give your plant a name.';
  if (value.length > validators.maxLength)
    return `Plant name cannot exceed ${validators.maxLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

export function validateDesc(
  value: string,
  validators: TextFieldValidator
): string {
  if (value.length > validators.maxLength)
    return `Plant description cannot exceed ${validators.maxLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

export function validateSowFrom(
  value: string,
  validators: MonthValidator
): string {
  if (validators.required === true && value.length === 0)
    return 'Specify the starting month of the sowing season.';
  return '';
}

export function validateSowUntil(
  value: string,
  validators: MonthValidator
): string {
  if (validators.required === true && value.length === 0)
    return 'Specify the ending month of the sowing season.';
  return '';
}

export function validateHarvestFrom(
  value: string,
  validators: MonthValidator
): string {
  if (validators.required === true && value.length === 0)
    return 'Specify the starting month of the harvesting season.';
  return '';
}

export function validateHarvestUntil(
  value: string,
  validators: MonthValidator
): string {
  if (validators.required === true && value.length === 0)
    return 'Specify the ending month of the harvesting season.';
  return '';
}

// User form validation

export function validateUsername(
  value: string,
  validators: TextFieldValidator
): string {
  if (validators.required === true && value.length === 0)
    return 'Please enter username';
  if (value.length > validators.maxLength)
    return `Username cannot exceed ${validators.maxLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

// Basic email validation: email format to be validated further by sending a verification email
export function validateEmail(
  value: string,
  validators: TextFieldValidator
): string {
  if (validators.required === true && value.length === 0)
    return 'Please enter email address.';
  if (value.length > validators.maxLength || !value.includes('@'))
    return 'Please enter a valid email format.';
  return '';
}

export function validatePassword(
  value: string,
  validators: PasswordValidator
): string {
  if (validators.required === true && value.length === 0)
    return 'Please enter password';
  if (value.length > validators.maxLength)
    return `Password cannot exceed ${validators.maxLength} characters. You are currently using ${value.length} characters.`;
  if (value.length < validators.minLength)
    return `Password should have at least ${validators.minLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

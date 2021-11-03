// Types
type TextConstraints = {
  maxLength: number;
  required: boolean;
};

type MonthConstraints = {
  required: boolean;
};

type PasswordConstraints = {
  minLength: number;
  maxLength: number;
  required: boolean;
};

// Plant form validation

export function validateName(
  value: string,
  constraints: TextConstraints
): string {
  if (constraints.required === true && value.length === 0)
    return 'Give your plant a name.';
  if (value.length > constraints.maxLength)
    return `Plant name cannot exceed ${constraints.maxLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

export function validateDesc(
  value: string,
  constraints: TextConstraints
): string {
  if (value.length > constraints.maxLength)
    return `Plant description cannot exceed ${constraints.maxLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

export function validateSowFrom(
  value: string,
  constraints: MonthConstraints
): string {
  if (constraints.required === true && value.length === 0)
    return 'Specify the starting month of the sowing season.';
  return '';
}

export function validateSowUntil(
  value: string,
  constraints: MonthConstraints
): string {
  if (constraints.required === true && value.length === 0)
    return 'Specify the ending month of the sowing season.';
  return '';
}

export function validateHarvestFrom(
  value: string,
  constraints: MonthConstraints
): string {
  if (constraints.required === true && value.length === 0)
    return 'Specify the starting month of the harvesting season.';
  return '';
}

export function validateHarvestUntil(
  value: string,
  constraints: MonthConstraints
): string {
  if (constraints.required === true && value.length === 0)
    return 'Specify the ending month of the harvesting season.';
  return '';
}

// User form validation

export function validateUsername(
  value: string,
  constraints: TextConstraints
): string {
  if (constraints.required === true && value.length === 0)
    return 'Please enter username.';
  if (value.length > constraints.maxLength)
    return `Username cannot exceed ${constraints.maxLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

// Basic email validation: email format to be validated further by sending a verification email
export function validateEmail(
  value: string,
  constraints: TextConstraints
): string {
  if (constraints.required === true && value.length === 0)
    return 'Please enter email address.';
  if (value.length > constraints.maxLength || !value.includes('@'))
    return 'Please enter a valid email format.';
  return '';
}

export function validatePassword(
  value: string,
  constraints: PasswordConstraints
): string {
  if (constraints.required === true && value.length === 0)
    return 'Please enter password.';
  if (value.length > constraints.maxLength)
    return `Password cannot exceed ${constraints.maxLength} characters. You are currently using ${value.length} characters.`;
  if (value.length < constraints.minLength)
    return `Password should have at least ${constraints.minLength} characters. You are currently using ${value.length} characters.`;
  return '';
}

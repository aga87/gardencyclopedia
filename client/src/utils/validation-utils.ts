type TextFieldValidator = {
  maxLength: number;
  required: boolean;
};

type MonthValidator = {
  required: boolean;
};

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

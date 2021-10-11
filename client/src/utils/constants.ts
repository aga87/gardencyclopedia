import type { Month, Plant, Category, Sort } from './common-types';

export const months: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const plantCategories: Category[] = [
  'uncategorised',
  'vegetables',
  'fruits',
  'herbs',
  'flowers'
];

export const sortOptions: Sort[] = [
  'name',
  'category',
  'sowing time',
  'harvest time'
];

export const emptyPlant: Plant = {
  _id: '',
  name: '',
  desc: '',
  category: plantCategories[0],
  sowFrom: '',
  sowUntil: '',
  harvestFrom: '',
  harvestUntil: ''
};

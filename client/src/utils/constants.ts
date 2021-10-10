import type { Plant } from './common-types';

export const months = [
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

export const plantCategories = [
  'uncategorised',
  'vegetables',
  'fruits',
  'herbs',
  'flowers'
];

export const sortOptions = ['name', 'category', 'sowing time', 'harvest time'];

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

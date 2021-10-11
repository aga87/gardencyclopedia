
// arrays in readonly mode
const plantCategories = [
  '',
  'uncategorised',
  'vegetables',
  'fruits',
  'herbs',
  'flowers'
] as const;

const months = [
  '',
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
] as const;

const sortOptions = [
  'name',
  'category',
  'sowing time',
  'harvest time'
] as const;

export type Month = typeof months[number];
export type Category = typeof plantCategories[number];

export type Plant = {
  _id?: string;
  name: string;
  desc: string;
  category: Category;
  sowFrom: Month;
  sowUntil: Month;
  harvestFrom: Month;
  harvestUntil: Month;
};

export type Sort = typeof sortOptions[number];

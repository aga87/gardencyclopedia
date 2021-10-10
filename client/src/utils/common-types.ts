import { plantCategories, months, sortOptions } from './constants';

// arrays in readonly mode
const plantCategoriesArr = [...plantCategories] as const;
const monthsArr = ['', ...months] as const;
const sortOptionsArr = [...sortOptions] as const;

export type Month = typeof monthsArr[number];

export type Plant = {
  _id: string;
  name: string;
  desc: string;
  category: typeof plantCategoriesArr[number];
  sowFrom: Month;
  sowUntil: Month;
  harvestFrom: Month;
  harvestUntil: Month;
};

export type Sort = typeof sortOptionsArr[number];

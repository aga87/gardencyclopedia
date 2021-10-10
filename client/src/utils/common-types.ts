import { plantCategories, months } from './constants';

// arrays of categories and months in readonly mode
const plantCategoriesArr = [...plantCategories] as const;
const monthsArr = ['', ...months] as const;

export type Plant = {
  _id: string;
  name: string;
  desc: string;
  category: typeof plantCategoriesArr[number];
  sowFrom: typeof monthsArr[number];
  sowUntil: typeof monthsArr[number];
  harvestFrom: typeof monthsArr[number];
  harvestUntil: typeof monthsArr[number];
};

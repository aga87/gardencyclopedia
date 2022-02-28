import {
  capitalize,
  getSowingDataLabel,
  getHarvestDataLabel
} from './text-utils';

test('capitalize', () => {
  expect(capitalize('word')).toBe('Word');
  expect(capitalize('this is a sentence.')).toBe('This is a sentence.');
});

test('getSowingDataLabel', () => {
  expect(getSowingDataLabel({ sowFrom: '', sowUntil: '' })).toBe(
    'No sowing data.'
  );
  expect(getSowingDataLabel({ sowFrom: '', sowUntil: 'March' })).toBe(
    'No sowing data.'
  );
  expect(getSowingDataLabel({ sowFrom: 'May', sowUntil: '' })).toBe(
    'No sowing data.'
  );
  expect(getSowingDataLabel({ sowFrom: 'May', sowUntil: 'August' })).toBe(
    'Sow from May to August.'
  );
  expect(getSowingDataLabel({ sowFrom: 'May', sowUntil: 'May' })).toBe(
    'Sow in May.'
  );
});

test('getHarvestDataLabel', () => {
  expect(getHarvestDataLabel({ harvestFrom: '', harvestUntil: '' })).toBe(
    'No harvesting data.'
  );
  expect(getHarvestDataLabel({ harvestFrom: '', harvestUntil: 'March' })).toBe(
    'No harvesting data.'
  );
  expect(getHarvestDataLabel({ harvestFrom: 'May', harvestUntil: '' })).toBe(
    'No harvesting data.'
  );
  expect(
    getHarvestDataLabel({ harvestFrom: 'May', harvestUntil: 'August' })
  ).toBe('Harvest from May to August.');
  expect(getHarvestDataLabel({ harvestFrom: 'May', harvestUntil: 'May' })).toBe(
    'Harvest in May.'
  );
});

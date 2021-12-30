import { getNextIndex, getPreviousIndex } from './list-utils';

test('getNextIndex', () => {
  const list = ['a', 'b', 'c', 'd'];
  expect(getNextIndex(0, list)).toBe(1);
  expect(getNextIndex(1, list)).toBe(2);
  expect(getNextIndex(3, list)).toBe(0);
});

test('getPreviousIndex', () => {
  const list = ['a', 'b', 'c', 'd'];
  expect(getPreviousIndex(0, list)).toBe(3);
  expect(getPreviousIndex(1, list)).toBe(0);
  expect(getPreviousIndex(2, list)).toBe(1);
});

import { toZeroOnesArr } from './plants-utils';

test('toZeroOnesArr', () => {
  expect(toZeroOnesArr('February', 'February')).toStrictEqual([
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  expect(toZeroOnesArr('', 'February')).toStrictEqual([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  expect(toZeroOnesArr('February', 'May')).toStrictEqual([
    0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0
  ]);
  expect(toZeroOnesArr('November', 'February')).toStrictEqual([
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1
  ]);
});

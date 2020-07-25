const {logMock} = require('../index');
const {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort,
} = require('../../003_algorithm/003_sort');

const origin = console.log;
afterEach(() => (console.log = origin));

const list = [1, 43, 12, 31, 53, 5, 33, 63, 34, 54, 6, 67, 88, 32, 42]
const ans = [1, 5, 6, 12, 31, 32, 33, 34, 42, 43, 53, 54, 63, 67, 88]

describe('bubbleSort', () => {
  test('normal', () => {
    expect(bubbleSort(list)).toEqual(ans);
  });
});

describe('insertSort', () => {
  test('normal', () => {
    expect(insertSort(list)).toEqual(ans);
  });
});

describe('mergeSort', () => {
  test('normal', () => {
    expect(mergeSort(list)).toEqual(ans);
  });
});

describe('quickSort', () => {
  test('normal', () => {
    expect(quickSort(list)).toEqual(ans);
  });
});


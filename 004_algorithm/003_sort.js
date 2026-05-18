/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      let temp = array[j];
      if (temp > array[j + 1]) {
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort(array) {
  let j, temp;
  for (let i = 1; i < array.length; i++) {
    j = i - 1;
    temp = array[i];
    while (j >= 0 && temp < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  return merge(left, right);
}

function merge(left, right) {
  const newArray = [];
  while (left.length >= 1 && right.length >= 1) {
    if (left[0] > right[0]) {
      newArray.push(right.shift());
    } else {
      newArray.push(left.shift());
    }
  }
  return newArray.concat(left, right);
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort(a, start = 0, end = a.length - 1) {
  return a;
}

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort,
};

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
  //配列の数だけループ
  for (let i = 0; i < array.length - 1; i++) {
    //ループのネスト 配列の右端の要素からスタート
    for (let j = array.length - 1; j > i; j--) {
      //配列の右端が左隣の要素より小さかったら
      if (array[j] < array[j - 1]) {
        //tmp変数に該当の要素を代入して残す
        let tmp = array[j];
        //該当の要素を比較した要素に移動
        array[j] = array[j - 1];
        //比較した要素をtmpに変更
        array[j - 1] = tmp;
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
  for (let i = 1; i < array.length; i++) {
    let j;
    let tmp = array[i]; //挿入する値

    for (j = i - 1; j >= 0; j--) {
      if (array[j] > tmp) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }
    array[j + 1] = tmp;
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
  return arr;
}

function merge(left, right) {}

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

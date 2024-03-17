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
  // arrの要素数が1以下だったらそのままarrを返す
  if (arr.length <= 1) {
    return arr;
  }
  // 配列の中心centerを算出してleftとrightに分割
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  // arr.length <= 1になるまで再起的にmarge関数を呼び出し続ける
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  //空の配列を定義
  const result = [];

  //leftかrightのどちらかが空になるまで処理を繰り返す
  while (left.length && right.length) {
    //配列の先頭の大きさを比較
    if (left[0] < right[0]) {
      //小さい方をleftから先頭要素を取り出し、resultにpush
      result.push(left.shift());
    } else {
      //大きい方をrightから先頭要素を取り出し、resultにpush
      result.push(right.shift());
    }
  }
  //result,left,rightを合体させて返す
  return [...result, ...left, ...right];
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
  let pivot = a[Math.floor(start + end / 2)];
  for (let i = start; i <= a.indexOf(pivot); i++) {
    for (let j = a.indexOf(pivot) + 1; j <= end; j++) {
      if (pivot < a[i]) {
        a[a.indexOf(pivot) + 1] = a[i];
      }
      if (pivot > a[j]) {
        a[a.indexOf(pivot) - 1] = a[j];
      }
    }
  }

  return a;
}

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort,
};

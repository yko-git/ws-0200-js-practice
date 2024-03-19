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

function quickSort(a) {
  // 配列の要素数が1以下の場合は、そのまま返す
  if (a.length <= 1) {
    return a;
  }

  // 基準となる配列の中心要素を定義
  const pivot = a[Math.floor(a.length / 2)];

  // 基準となる要素を除いた、左側の配列
  const left = [];
  // 基準となる要素を除いた、右側の配列
  const right = [];

  // 基準となる要素を除いた配列を作成
  for (let i = 0; i < a.length; i++) {
    // iが中心要素だった場合は更新式にジャンプ
    if (i === Math.floor(a.length / 2)) {
      continue;
    }
    // 比較要素がpivotより小さい場合
    if (a[i] < pivot) {
      left.push(a[i]);
    } else {
      right.push(a[i]);
    }
  }

  // 再帰的に処理を行い、結果を返す
  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort,
};

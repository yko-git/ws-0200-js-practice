/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch(array, target) {
  // 配列の位置を設定
  let index = -1;
  let low = 0; //左端
  let high = array.length - 1; //右端

  //左端が右端以下の間（1つの要素に絞られるまで）は処理を続ける
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // 真ん中の位置
    let guess = array[mid]; // 真ん中の要素

    //真ん中の要素がtargetと合致したら
    if (guess == target) {
      //位置を返す
      index = mid;
      return index;

      //真ん中の要素がtargetより大きかったら
    } else if (guess > target) {
      //右端の位置は要素の位置-1
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return index;
}

module.exports = {
  linearSearch,
  binarySearch,
};

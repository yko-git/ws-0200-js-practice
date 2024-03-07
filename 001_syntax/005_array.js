/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  for (let value of array) {
    console.log(value);
  }
}

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days;
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  for (let i = 0; i < array.length; i++) {
    const cursor = array[i];
    if (cursor === num) {
      return true;
    }
  }
  return false;
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    // 対象の配列を定義
    const cursor = array[i];

    //次の要素をループをネストして取得
    for (let j = i + 1; j < array.length; j++) {
      //対象の要素と比較する要素が同じだったら
      if (cursor === array[j]) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate,
};

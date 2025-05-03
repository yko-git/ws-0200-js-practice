/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  if (num <= 0) {
    let first = str.slice(Math.abs(num));
    let after = str.slice(0, Math.abs(num));
    return first + after;
  }
  let first = str.slice(str.length - num);
  let after = str.slice(0, str.length - num);
  return first + after;
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  return [...str]
    .filter(
      (value) =>
        value !== "a" &&
        value !== "e" &&
        value !== "i" &&
        value !== "o" &&
        value !== "u"
    )
    .join("");
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2, count = 0, num = 0) {
  const index = s1.indexOf(s2, num);
  if (index === -1) {
    return count;
  }

  count++;
  return countStr(s1, s2, count, index + s2.length);
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  if (num === 2 || num === 3 || num === 5) {
    return true;
  }
  if (num === 1 || num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    return false;
  }
  return true;
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
      i++;
      if (array[i] === 4) {
        i++;
      }
      continue;
    }
    sum += array[i];
  }
  return sum;
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext,
};

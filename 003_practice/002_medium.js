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
  let target1 = [];
  let target2 = [];

  if (num >= 0) {
    for (let i = 0; i < str.length; i++) {
      if (i >= str.length - num) {
        target1.push(str[i]);
      } else {
        target2.push(str[i]);
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      if (i >= Math.abs(num)) {
        target1.push(str[i]);
      } else {
        target2.push(str[i]);
      }
    }
  }
  const targetUnion = target1.concat(target2);
  return targetUnion.join("");
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
  const vowels = ["a", "i", "u", "e", "o"];
  let target = [];

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      target.push(str[i]);
    }
  }

  return target.join("");
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
function countStr(s1, s2) {
  let pattern = new RegExp(s2, "g");
  return s1.match(pattern).length;
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
  if (str.length === 0) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - 1; j >= 0; j--) {
      if (str[i] === str[j] || str.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
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
  if (num <= 1) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
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
function sumWithout4andNext(array) {}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext,
};

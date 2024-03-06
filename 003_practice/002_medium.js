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
    const str1 = str.slice(num + Math.abs(num + num));
    const str2 = str.slice(0, num + Math.abs(num + num));
    return str1 + str2;
  } else {
    const str1 = str.slice(-num);
    const str2 = str.slice(0, str.length - num);
    return str1 + str2;
  }
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
  let strArray = [...str];
  strArray.forEach((value) => {
    if (
      value === "a" ||
      value === "e" ||
      value === "i" ||
      value === "o" ||
      value === "u"
    ) {
      strArray.splice(strArray.indexOf(value), 1, "");
    }
  });
  return strArray.join("");
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
  const search = /s2/g;
  const searchStr = s1.match(search);
  return console.log(searchStr.length);
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
  const strArray = [...str];
  const strReverse = [...str].reverse();

  if (strArray.toString() === strReverse.toString()) {
    return true;
  } else {
    return false;
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
  if (num === 2 || num === 3) {
    return true;
  } else if (num === 1 || num % 2 === 0 || num % 3 === 0) {
    return false;
  } else {
    return true;
  }
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
  let sumArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
      sumArray.push(0);
      array[i + 1] = 0;
    } else {
      sumArray.push(array[i]);
    }
  }
  const sum = sumArray.reduce((pre, current) => {
    return pre + current;
  });
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

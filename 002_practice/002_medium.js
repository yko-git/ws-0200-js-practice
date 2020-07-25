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
  const n = num >= 0 ? str.length - num : - num

  return str.slice(n, str.length) + str.slice(0, n)
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'librry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  let res = ''
  for (let i =0; i < str.length; i++) {
    if (!str[i].includes(['a', 'i', 'u', 'e', 'o'])) {
      res += str[i]
    }
  }
  return res
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
  acc = ''
  count = 0;
  for (let i = 0; i < s1.length; i++) {
    const char = s1.slice(i, i+1)
    if (s2.slice(acc.length, acc.length + 1) === char) {
      acc = acc + char
    } else {
      acc = ''
    }

    if (s2 === acc) {
      count++;
    }
  }

  return count
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
  if (num === 2) {
    return true
  }

  if (num === 1 || num % 2 === 0) {
    return false
  }


  i = 3
  while (i <= Math.floor(Math.sqrt(num))) {
    if (num % i === 0) {
      return false
    }
    i = i + 2
  }

  return true
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3 , 4] => 6
 *    [1, 2, 3 , 4, 5] => 6
 *    [1, 4, 3 , 4, 5] => 1
 *    [4, 3 , 3, 5] => 11
 *    [4, 3 , 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    const n = array[i]
    if (n === 4 || (i > 0 && array[i-1] == 4)) {
      // do nothing
    } else {
      sum = sum + n
    }
  }
  return sum
}

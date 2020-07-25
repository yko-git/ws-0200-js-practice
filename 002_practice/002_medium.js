/**
 *  2.1.1 Fizz Buxx
 *
 *  1から100の数字までをカウントして、数字が3の倍数の場合にFizz
 *  5の倍数の場合にBuzz、3と5の倍数の時にFizzBuzzと表示する関数を実装してください。
 *
 *  example:
 *    1
 *    2
 *    3 Fizz
 *    4
 *    5 Buzz
 *    6
 *    7
 *    ..
 *    15 FizzBuzz
 *    ..
 *    18 Fizz
 *    ...
 *    30 FizzBuzz
 *    ...
 */

function fizzBuzz () {
  for (let i = 1; i <= 100; i++) {
    let str = ''
    if (i % 3 === 0) {
      str = 'Fizz'
    }

    if (i % 5 === 0) {
      str = 'Buzz'
    }

    if ((i % 5 === 0) && (i % 3 === 0)) {
      str = 'FizzBuzz'
    }

    console.log(i + ' ' + str)
  }
}

/**
 *  2.1.2 配列の合計
 *
 *  渡された配列の合計を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 20
 *    [2, 5, 3] => output: 10
 *    [1] => output: 1
 *
 */

function sum(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
}

/**
 *  2.1.3 配列の最大値と最小値
 *
 *  配列の最大値と最小値を出力する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => max: 20, min: 1
 *    [2, 5, 3, 6, 10, -1] => max: 10, min: -1
 *    [1] => max: 1, min: 1
 *
 */

function minMax(array) {
  let min = null
  let max = null
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    if(min == null || current < min) {
      min = current
    }

    if(max == null || current > max) {
      max = current
    }
  }

  console.log(`max: ${max}, min: ${min}`)
}

/**
 *  2.1.4 文字列の反転
 *
 *  文字列を反転させる関数を実装してください
 *
 *  example:
 *    'library' => 'yrarbil'
 *    'krow' => 'work'
 *    'fizzbuzz' => 'zzubzzif'
 *
 */
function reverse(str) {
  let reversed = ''
  for(let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str.slice(i, i + 1)
  }
  return reversed
}

/**
 *  2.1.5 文字列のローテート
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
 *  2.1.6 文字列のカウント
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
 *  2.1.7 素数
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
 *  2.1.7 配列の4と次の数字を抜いた合計
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

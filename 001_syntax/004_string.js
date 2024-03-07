/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  return str.length;
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  return str.length % 2 == 0;
}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  // return str.charAt();
  if (str) {
    return str[0];
  } else {
    return "";
  }
}

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  return str.charAt(str.length - 1);
}

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  if (str === "") {
    return "";
  }
  let result = "";

  let numB = b;
  if (numB >= str.length) {
    numB = str.length;
  }

  for (let i = a; i <= numB; i++) {
    result = result + str[i - 1];
  }
  return result;
}

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

function isInclude(a, b) {
  //bの文字列が空だったらtrue
  if (!b) {
    return true;
  } else if (!a) {
    return false;
  }
  //bの一文字目（w）を調べる対象searchとする
  let search = b[0];

  for (let i = 0; i < a.length; i++) {
    //wをcursorとする
    const cursor = a[i];

    //bの1行目とaの1行目が合致したら(w : w)
    if (search === cursor) {
      for (let j = i + 1; j < a.length; j++) {
        //bIndexは(1)
        const bIndex = j - i;

        //bの次のoが o == oでなかったら
        if (a[j] !== b[bIndex]) {
          //searchを1文字目の対象に戻す(w)
          search = b[0];
          //プログラムの制御を終了
          break;
        }
        //bの文字列-1(3)がbIndex(1)以上だったら
        if (bIndex >= b.length - 1) {
          return true;
        }
      }
    } else {
      return false;
    }
  }
}

/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

function printByChar(str) {
  for (let value of str) {
    console.log(value);
  }
}

module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar,
};

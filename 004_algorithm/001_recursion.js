/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence(n, sum = 0) {
  //引数nが最後の1になったら
  if (n < 2) {
    return 1;
  }
  return n + sumSequence(n - 1);
}

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

function fibonacci(num) {
  // 空の配列を定義
  let array = [];

  // fibo関数を定義
  const fibo = (n) => {
    //引数nが最後の2までは
    if (n <= 2) {
      // 1を返す
      return 1;
    } else {
      return fibo(n - 2) + fibo(n - 1);
    }
  };

  // fibo関数をループで処理して配列に代入
  for (let i = 1; i <= num; i++) {
    array.push(fibo(i));
  }

  return array;
}

/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize(node, sum = 0) {
  let sumNum = 0;

  if (node["children"]) {
    for (let value of node.children) {
      sumNum = sumNum + value.size;
    }
    return sumNum;
  } else {
    return node.size;
  }
}

module.exports = {
  sumSequence,
  fibonacci,
  fileSize,
};

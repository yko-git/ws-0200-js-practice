/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  const obj = {
    name: "Bob",
    age: 32,
    gender: "male",
  };
  return obj;
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  const shallowClone = (person) => {
    return Object.assign({}, obj);
  };
  const obj = { name: "Mary", age: 37, gender: "female" };
  const cloneObj = shallowClone(obj);
  return cloneObj;
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
  return persons.reduce((pre, current) => {
    return { ...pre, [current]: Math.round(Math.random() * 10) };
  }, {});
}

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    //配列の要素をvalueに代入
    const value = array[i];
    //objに配列要素があったら
    if (obj[value]) {
      return true;
    }
    obj[value] = true;
  }
  return false;
}

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate,
};

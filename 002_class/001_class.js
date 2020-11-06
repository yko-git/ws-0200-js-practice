
/**
 *  クラスの定義
 *
 *  1. PersonクラスにインスタンスメソッドsayHi()を実装してください。
 *     sayHi()メソッドでは、 Hi!! という文字列を標準出力するように実装してください
 *  2. Personクラスにクラスメソッドdescribe()を実装してください
 *     describeメソッドでは、This is a Person class という文字列を表示するように実装してください
 *  3. Personクラスにname, age, bioフィールドを追加してください
 *  4. Personクラスにコンストラクタを宣言して、name, age, bioフィールドを初期化できるようにしてください
 *  5. PersonクラスにisUnderageのゲッターを宣言してくだい。メソッドでは、ageが20歳未満であればtrue,
 *     そうでなければfalseを返すように実装してください
 *  6. 下記のtest関数が動くように、それぞれ実装をしてください。
 *  　　1 ~ 5 が完了していれば、toStringのメソッドを実装するだけで大丈夫です。
 *      toStringは下記の内容が標準出力されることが期待値です。(先頭、末尾の空白は不要）
 *
 *      name: ichiro, age: 54, bio: I like to play baseball
 *
 */

class Person {
  static describe() {
    console.log('This is a Person class')
  }

  name = ''
  age = 0
  bio = ''

  constructor(name, age, bio) {
    this.name = name
    this.age = age
    this.bio = bio
  }

  get isUnderage() {
    return this.age < 20
  }

  sayHi() {
    console.log('Hi!!')
  }

  toString() {
    return `name: ${this.name}, age: ${this.age}, bio: ${this.bio}`
  }
}

function test () {
  const person = new Person('ichiro', 54, 'I like to play baseball')
  person.sayHi()
  person.describe()
  person.isUnderage

  person.bio = 'I like to play basketball'
  person.toString()
}

module.exports = {
  Person,
  test
}

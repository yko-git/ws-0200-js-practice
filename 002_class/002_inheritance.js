
/**
 *  継承
 *
 *  Animalクラスを継承するDog, Pig, Chikenクラスを実装してください
 *
 *  Dogクラス
 *    typeフィールド: dog
 *    barkメソッド: wang, wang! を標準出力
 *  Duckクラス
 *    typeフィールド: duck
 *    barkメソッド: quack, quack! を標準出力
 *  Chikenクラス
 *    typeフィールド: chiken
 *    barkメソッド: cock-a-doodle-do! を標準出力
 *
 */

class Animal {
  type = 'animal'

  breeth() {
    console.log('breezing')
  }

  who() {
    console.log(this.type)
  }

  bark() {
    throw Error('not implemented')
  }
}

class Dog extends Animal {
  type = 'dog'

  bark() {
    console.log('wang, wang!')
  }
}

class Duck extends Animal {
  type = 'dog'

  bark() {
    console.log('wang, wang!')
  }
}

class Chiken extends Animal {
  type = 'chiken'

  bark() {
    console.log('cock-a-doodle-do!')
  }
}


function test () {
  const dog = new Dog()
  const pig = new Pig()
  const chiken = new Dog()

  dog.who()
  pig.who()
  chiken.who()

  dog.bark()
  pig.bark()
  chiken.bark()
}

module.exports = {
  test,
  Chiken,
  Dog,
  Duck
}

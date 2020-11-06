/**
 *  リストの実装
 *
 */

class List {
  data = [];
  /**
   * Listクラスのインスタンスを作成する。
   * @constructor
   * @this {List}
   * @param {Number} array リストのデータ　
   */
  constructor(array) {
    this.data = array;
  }

  get size() {
    return this.data.length
  }

  /**
   *
   * @param {Number} index
   * @return {Number}
   */
  index(index) {
    return this.data[index];
  }

  push(item) {
    this.data.push(item);
  }

  remove(targetIndex) {
    this.data = this.data.filter((_, index) => index !== targetIndex);
  }

  pop() {
    return this.data.pop()
  }

  shift() {
    return this.data.shift()
  }

  find(target) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i]
      if (item === target) {
        return item
      }
    }
  }

  findIndex(target) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i]
      if (item === target) {
        return i
      }
    }
  }

  filter(target) {
    const array = []
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i]
      if (item !== target) {
        array.push(item)
      }
    }
    return array
  }
}

/**
 *  スタックの実装
 *
 */

class Stack {
  data = [];
  constructor(array) {
    this.data = array;
  }

  get size() {
    return this.data.length
  }

  push(item) {
    this.data.push(item)
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.length-1]
  }
}

/**
 *  キューの実装
 *
 */

class Queue {
  data = [];
  constructor(array) {
    this.data = array;
  }

  get size() {
    return this.data.length
  }

  push() {
    this.data.shift(item)
  }

  pull() {
    return this.data.pop(item)
  }

  peek() {
    return this.data[this.size -1]
  }
}

module.exports = {
  List,
  Stack,
  Queue
};

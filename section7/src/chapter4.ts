/**
 * 제네릭 클래스
 * 호출할 때 타입을 추론해서 별도의 타입을 지정하지 않아도 된다.
 */

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2"]);

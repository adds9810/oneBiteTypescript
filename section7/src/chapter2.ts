/**
 * map, forEach 메서드 타입 정의하기
 */

// Map 메서드 타입 정의하기
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
map(arr, (it) => it.toString());

// ForEach 메서드 타입 정의하기
const arr2 = [1, 2, 3];

arr2.forEach((it) => console.log(it));
// 출력 : 1, 2, 3

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => console.log(it.toString()));
forEach(["12", "23"], (it) => {
  it;
});

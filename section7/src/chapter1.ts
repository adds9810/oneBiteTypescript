/**
 * 타입 변수 응용하기
 */

// 사례1
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 사례2
function returnFirstValue1<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue1([0, 1, 2]);
// number

let str1 = returnFirstValue1([1, "hello", "mynameis"]);
// number | string

//사례3
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str2 = returnFirstValue2([1, "hello", "mynameis"]);
// number

// 사례 4
// 특정 객체에 length 프로퍼티가 있을 때만 사용할 수 있도록 제약
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123");

getLength([1, 2, 3]);

getLength({ length: 1 });

// getLength(undefined); // err

// getLength(null); // err

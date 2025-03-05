/**
 * 제네릭
 * 일반적인 또는 포괄적인 함수
 * 함수를 호출할 때 타입이 지정됨
 */

function func<T>(value: T): T {
  return value;
}

let num = func(10);
// number 타입

let str = func("string");
// unknown 타입

// 배열호출
let arr = func<[number, number, number]>([1, 2, 3]);

// 함수타입 표현식
// 매개변수 개수가 동일해야함
type Operation = (a: number, b: number) => number; // 타입 별칭으로 사용가능

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니쳐(콜 시그니쳐)
type Operation2 = {
  (a: number, b: number): number;
  name: string; // 함수도 객체이기 때문에 찺을 추가할 수 있음
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1, 2);
add2.name;

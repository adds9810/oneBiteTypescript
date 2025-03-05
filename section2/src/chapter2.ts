// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];
let boolArr: Array<boolean> = [true, false, true]; // Array<배열요소타입> : 제네릭

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (number | string)[] = [1, "hello"]; // 유니온(Union) 타입

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 타입스크립트의 특수한 타입으로 길이와 타입이 고정된 배열을 의미
// 배열로 인식하기 때문에 길이 제한이 발생하지 않음
let tup1: [number, number] = [1, 2]; // 오직 이 요소해 해당하는 배열만 수용가능
let tup2: [number, string, boolean] = [1, "hello", true];

// 주의해서 사용 필요
// tup1.push(1);
// tup1.pop();

// 튜플을 왜 쓰는걸까?
// 값을 잘못 넣었을 때 오류를 알려주어 방지가능
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "조아무개"], // 오류 발생
];

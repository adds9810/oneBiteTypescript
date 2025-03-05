// 대수 타입 : 여러개의 타입을 합성해서 만드는 타입

// 1. 합집합 타입 - Union 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

// Union 타입으로 배열 타입 정의하기
let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// err
// let union4: Union1 = {
//   name: "",
// };

// 2. 교집합(Intersection) 타입
type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

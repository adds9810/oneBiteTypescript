/**
 * 선언 합침(Declaration Merging)
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; 같은 타입일 경우엔 재 선언가능
  age: number;
}

const person: Person = {
  name: "이정환",
  age: 27,
};

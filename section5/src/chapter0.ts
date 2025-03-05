/**
 * 인터페이스
 */

interface Person {
  name: string;
  // readonly name: string; 읽기 전용으로 설정하고 값을 입력하면 에러발생
  age?: number;
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void; // 오버로드
}
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: "이정환",
  age: 27,
  sayHi: function () {
    console.log("hi");
  },
};

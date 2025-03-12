/**
 * Keyof 연산자
 */
interface Person {
  name: string;
  age: number;
  //   location: string; // 추가
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name");

// Typeof와 Keyof 함께 사용하기

/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓인 타입에서 좁은 타입으로 타입 상황에 따라 좁히는 방법
 */
// in 타입 가드
type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // instanceof 왼쪽 값이 오른쪽 값의 인스턴트 인지 확인하는 연산자
    // 오른쪽 값이 타입은 가능하나 객체는 에러남
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // in 오른쪽 값이 객체일 때, null, undefind는 들어올 수 없음
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}

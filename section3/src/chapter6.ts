/**
 * 타입 단언 : 때에 따라 리스크가 있으므로 확실한 경우에만 사용
 */
type Person = {
  name: string;
  age: number;
};

// 값을 변경할 때 사용
// 값 as 타입
let person = {} as Person;
person.name = "";
person.age = 23;

/**
 * 타입 단언의 조건 : 겹치는 부분이 있어야 함
 */
// A가 B의 슈퍼타입이다
// A가 B의 서브타입이다
let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; // x
let num3 = 10 as unknown as string; // 다중으로는 가능 지양하는 방식

/**
 * const 단언
 */
let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length; // null 이나 undefind가 아닐것이라고 단언해줌

/**
 * 맵드 타입
 */
interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입은 인터페이스로 생성 불가, 타입으로만 생성 가능
// 없을때도 고려한 타입생성 가능
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

// keyof와 결합
type BooleanUser = { [key in keyof User]: boolean };

// 읽기전용
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 유저 정보 수정 기능
}

updateUser({
  // err
  age: 25,
});

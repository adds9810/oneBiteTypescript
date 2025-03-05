// 객체 리터럴 타입
// 구조적 타입 시스템(구조 기준 Property Based TS) <-> 명목적 타입 시스템(c언어)
let user: {
  id?: number; // 선택적 프로퍼티가 된 id
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

user.id;

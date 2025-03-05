// 열거형(Enum) 타입 - 타입스크립트 문법
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 결과가 사라지지 않고 객체형으로 변경됨

// 숫자형
enum Role {
  ADMIN,
  USER,
  GUEST,
}

// 문자형
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0
  language: Language.korean, // "ko"
};

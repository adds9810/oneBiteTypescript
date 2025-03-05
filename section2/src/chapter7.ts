// void
// void 타입은 아무런 값도 없음을 의미하는 타입
function func2(): void {
  console.log("hello");
}

// 타입을 undefined로 사용하면 return으로 undefined을 무조건 반환해야 하기때문에 필요시 사용

// 변수에 담을 경우 undefined만 허용
let a: void;
a = undefined;
a = null; // "strictNullChecks: false" 일 경우만 허용

// never 타입
// 불가능을 의미하는 타입, 보통 다음과 같이 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용
function func3(): never {
  while (true) {}
}

// 변수에 어떤것도 담을 수 없음
let b: never;

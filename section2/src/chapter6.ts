// any 타입
// 모든 누구나, 변수의 타입을 잘 모를 때
// 모든 타입 수용, 런타임 오류 발생
// 가급적 사용 지양
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

// Unknown 타입
// unknown 타입은 any 타입과 비슷하지만 보다 안전한 타입
// 모든 타입 거부
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}

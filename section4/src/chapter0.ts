// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수 타입 정의
const add = (a: number, b: number): number => a + b;

// 매개변수 기본값 설정하기
// 선택적 매개변수를 사용할 경우 필수 매개변수를 앞에다 두어야 오류나지 않음
function introduce(name = "이정환", tall?: number) {
  // 오류!
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("이정환", 156);

introduce("이정환");

// 나머지 매개변수
function getSum(...rest: [number, number, number]) {
  // function getSum(...rest: [number, number, number]) { 값을 고정하고 할 경우
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3);
// getSum(1, 2, 3, 4); // err

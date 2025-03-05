/**
 * 인터페이스인터페이스 확장 = 상속
 */

interface Animal {
  name: string;
  color: string;
}

// Animal에서 사용하는 타입사용 + 각각의 별개의 타입사용
interface Dog extends Animal {
  // name: "doldol"; // 타입 재 정의, 스트링타입만 재정의 가능
  breed: string;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중확장 가능
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
};

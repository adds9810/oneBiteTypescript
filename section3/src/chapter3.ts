type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // OK
// dog = animal; // NO

// 슈퍼타입
type Book = {
  name: string;
  price: number;
};

// 서브타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // OK
// programmingBook = book; // NO

let book2: Book = {
  // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // 초과 프로퍼티 검사(변수를 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능)로 인한 에러
};

let book3: Book = programmingBook; // 앞서 만들어둔 변수

function func(book: Book) {}

// 함수의 경우도 동일한 오류 발생
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
});

// 해결하고자 할 경우 변수에 미리 값을 담아둔 다음 변수값을 인수로 전달
func(programmingBook);

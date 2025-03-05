/**
 * 접근 제어자(Access Modifier)
 * public : 모든 범위에서 접근 가능(기본, 아무 제약 없음)
 * private : 클래스 내부에서만 접근 가능, 파생 클래스에서도 사용 불가
 * proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
 */

class Employee {
  // 필드
  name: string; // 자동으로 public
  // private name: string; // private 접근 제어자 설정
  age: number; // 자동으로 public
  // protected age: number; // protected 접근 제어자 설정
  position: string; // 자동으로 public

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  // 아래와 같이 생성자 영역에 접근제어자 사용 가능(이 경우 중복 에러가 발생하여 별도 필드를 만들지 않아도 됨)
  // constructor(
  //   private name: string,
  //   protected age: number,
  //   public position: string
  // ) {}

  // 메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("이정환", 27, "devloper");

employee.name = "홍길동";
employee.age = 30;
employee.position = "디자이너";

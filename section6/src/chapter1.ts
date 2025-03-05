/**
 * 타입스크립트 클래스
 */

class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position?: string = "";

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

// 상속
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    // 상속
    super(name, age, position); // 타입스트립트에서는 생략하면 오류 발생
    this.officeNumber = officeNumber;
  }
}

const employeeA = new Employee("aaa", 25, "개발자");
console.log(employeeA);
// 구조적 타입이라 아래와 같이 사용 가능
const employeeB: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

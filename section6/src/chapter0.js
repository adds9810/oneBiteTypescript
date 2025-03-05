/**
 * 자바스크립트 클래스
 */
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    // 중복되는 변수는 부모클려스 생성자에서 호출
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let student = new Student("aaa", "a", 27);
console.log(student);
student.study();
student.introduce();

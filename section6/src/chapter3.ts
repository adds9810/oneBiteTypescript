/**
 * 인터페이스와 클래스
 * 복잡하고 정교한 프로그래밍시에 많이 사용
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}

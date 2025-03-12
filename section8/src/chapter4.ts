/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

// 조합
type ColoredAnimal = `${Color}-${Animal}`;

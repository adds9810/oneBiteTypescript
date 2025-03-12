/**
 * 조건부 타입
 */

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// 상속하는 타입인지 확인한 조건부 타입
type B = ObjB extends ObjA ? number : string;

// 제네릭 조건부 타입 : 활용시 극대화 됨
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
// string

let result2 = removeSpaces(undefined);
// undefined

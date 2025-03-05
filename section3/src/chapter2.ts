// unknown
let a: unknown = 1; // number -> unknown
let b: unknown = "hello"; // string -> unknown
let c: unknown = true; // boolean -> unknown
let d: unknown = null; // null -> unknown
let e: unknown = undefined; // undefined -> unknown
let f: unknown = []; // Array -> unknown
let g: unknown = {}; // Object -> unknown
let h: unknown = () => {}; // Function -> unknown

let unknownValue: unknown;

// let i: number = unknownValue;
// 오류 : unknown 타입은 number 타입에 할당할 수 없습니다.

// never 타입 (공집합 타입)
function errorFunc(): never {
  throw new Error();
}
// errorFunc 함수는 에러가 발생해 정상적으로 종료되지 못함 그러므로 어떤 값도 반환할 수 없음
// 만약 이 함수가 어떤 값을 반환한다면 그것은 불가능하며 모순됨

let neverVar: never;

let i: number = neverVar; // never -> number
let j: string = neverVar; // never -> string
let k: boolean = neverVar; // never -> boolean
let l: null = neverVar; // never -> null
let n: undefined = neverVar; // never -> undefined
let m: [] = neverVar; // never -> Array
let o: {} = neverVar; // never -> Object

// void 타입
let voidVar: void;
voidVar = undefined; // undefined -> void (ok)

let neverVar2: never;
voidVar = neverVar2; // never -> void (ok)

// any 타입 (치트키)
// 타입 계층도를 완전히 무시함. 일종의 치트키같은 타입. 사용 지양
// but naver 타입은 호환 안된
let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)

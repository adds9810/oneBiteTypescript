// 타입 별칭(중복지정 안됨)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처(Index Signature) : 객체 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법
// ex. [key : string] : string key가 string 타입이고 value가 string 타입인 모든 프로퍼티를 포함된다 라는 의미
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil: "bz",
};

// 주의사항
// 빈객체일 경우 오류가 발생하지 않기 때문에 반드시 포함해야 하는 프로퍼티가 있다면 직접 명시
// 추가적인 프로퍼티를 또 정의할 때에는 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 함
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

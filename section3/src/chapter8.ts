/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로마 만든 유니온 타입
 */
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 각 객체 내 tag 프로퍼티로 묶어서 서로소 유니온 타입이 됨

function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
    }
  }
}

// 선택적 프로퍼티를 사용하기 보단 타입들을 쪼개서 사용하는 것이 직관적이고 안전한게 사용할 수 있음
type LodingTask = {
  state: "LODING";
};
type FailedTask = {
  state: "FAILED";
  error: { message: string };
};
type SuccessTask = {
  state: "SUCCESS";
  response: { data: string };
};
type AsyncTask = LodingTask | FailedTask | SuccessTask;

function processResult(tast: AsyncTask) {
  switch (tast.state) {
    case "LODING": {
      console.log(`로딩중`);
      break;
    }
    case "FAILED": {
      console.log(`${tast.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`${tast.response.data}`);
      break;
    }
  }
}

const loding: AsyncTask = { state: "LODING" };
const failed: AsyncTask = { state: "FAILED", error: { message: "error" } };
const success: AsyncTask = { state: "SUCCESS", response: { data: "data" } };

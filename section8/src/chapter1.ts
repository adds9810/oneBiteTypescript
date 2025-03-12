/**
 * 인덱스드 엑세스 타입
 */

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

// 배열 요소의 타입 추출하기
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  // 중첩으로도 가져올 수 있음 author: Post["author"]['id']
  console.log(`${author.id} - ${author.name}`);
}
// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "이정환",
//   },
// };

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

printAuthorInfo(post.author);

// 튜플의 요소 타입 추출하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number];
// number | string | boolean

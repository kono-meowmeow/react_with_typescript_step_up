// // props用の型を作る
// type TodoType = {
//   userId: number;
//   title: string;
//   // completed: boolean;

//   // 必須じゃない型の指定方法は、要素名の後に?をつける
//   // 要素名?: 型;
//   completed?: boolean;
// }

// 上記のコードは下記のようにする

import { TodoType } from "./types/todo";


// props: 型名 で型を指定する
// Pick<型名, "プロパティ名" | "プロパティ名"> で必要なプロパティのみを抽出する
// Omit<型名, "プロパティ名" | "プロパティ名" | "プロパティ名"> で不要なプロパティを除外する
// export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
export const Todo = (props: Omit<TodoType, "id">) => {
  // 要素名 = 値 でデフォルトの値を決めることができるので、必須ではない要素にはデフォルトの値を決めておくと良い
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]"

  return (
    // 完了か未完了かをわかるようにする
    <p>{`${completeMark}${title}(ユーザー：${userId})`}</p>
  )
}

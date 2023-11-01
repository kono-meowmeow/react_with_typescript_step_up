// typeを使って、取得するTodoオブジェクトの各要素に型を与える
// exportして、どこでも使えるようにする
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

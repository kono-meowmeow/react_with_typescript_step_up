// props用の型を作る
type TodoType = {
  userId: number;
  title: string;
  // completed: boolean;

  // 必須じゃない型の指定方法は、要素名の後に?をつける
  // 要素名?: 型;
  completed?: boolean;
}

// props: 型名 で型を指定する
export const Todo = (props: TodoType) => {
  // 要素名 = 値 でデフォルトの値を決めることができるので、必須ではない要素にはデフォルトの値を決めておくと良い
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]"

  return (
    // 完了か未完了かをわかるようにする
    <p>{`${completeMark}${title}(ユーザー：${userId})`}</p>
  )
}

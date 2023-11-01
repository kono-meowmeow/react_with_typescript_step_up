import React, { useState } from 'react';
import axios from 'axios';

import './App.css';
import { Todo } from './Todo'
import { TodoType } from './types/todo'
import { Text } from './Text'

function App() {
  // stateへの型の指定
  // useState<型>で型を指定する
  // そうすることで、変数と更新関数の型が指定される
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    // axiosで取得するデータの型を指定する
    // axios.get<型>
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <Text color="red" fontSize="24px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return (
          // <p key={todo.id}>{todo.title}</p>
          // 下記のコードだと、useridがundefinedになる
          // todo.と入力すると、候補(userId)を出してくれる
          // 必要なpropsが足りていなくてもエラーとならない問題があるので、propsに型を与えて解決する(Todo.tsxで)
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        )
      })}
    </div>
  );
}

export default App;

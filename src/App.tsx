import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // stateへの型の指定
  // useState<型>で型を指定する
  // そうすることで、変数と更新関数の型が指定される
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return (
          <p key={todo.id}>{todo.title}</p>
        )
      })}
    </div>
  );
}

export default App;

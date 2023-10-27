import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res: object): void => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Task from './components/Task';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">

        <Input list={list} setList={setList}/>
        
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list}/>
      ))}
      </header>
    </div>
  );
}

export default App;

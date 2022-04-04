import './App.css';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { taskName: "Walk the dog", isDone: false},
    { taskName: "Wash Dishes", isDone: false}
  ])

  return (
    <>
      <h1>My Todo list</h1>
    </>
  );
}

export default App;

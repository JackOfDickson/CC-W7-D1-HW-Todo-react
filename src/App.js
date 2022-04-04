import './App.css';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { taskName: "Walk the dog", isDone: false},
    { taskName: "Wash Dishes", isDone: false},
    { taskName: "Feed Cat", isDone: true}
  ])

  const taskNodes = tasks.map((task) => {
    return (
    <li className= {task.iDone ? 'completed':'not-completed'}>
    <span>{task.taskName}</span>
    </li>
  )
})

  return (
    <>
      <h1>My ToDo list</h1>
      <ul>
        {taskNodes}
      </ul>
    </>
  );
}

export default App;

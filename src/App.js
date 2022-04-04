import './App.css';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { taskName: "Walk the dog", isDone: false},
    { taskName: "Wash Dishes", isDone: false},
    { taskName: "Feed Cat", isDone: true}
  ])

  const [newTask, setNewTask] = useState('')

  const handleItemInput = (event) => {
    setNewTask(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({ taskName: newTask, isDone: 'false'})
    setTasks(copyTasks);
    setNewTask('');
  }

  const taskNodes = tasks.map((task) => {
    return (
    <li className= {task.isDone ? 'completed':'not-completed'}>
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

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>New Task</label>
        <input id='new-task' type='text' value={newTask} onChange={handleItemInput}/>
        <input type='submit' value='Save and Add Task'/>

      </form>
    </>
  );
}

export default App;

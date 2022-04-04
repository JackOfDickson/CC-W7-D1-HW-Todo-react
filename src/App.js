import './App.css';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { taskName: "Walk the dog", priority: 'low'},
    { taskName: "Wash Dishes", priority: 'high'},
    { taskName: "Feed Cat", priority: 'high'}
  ])

  const [newTaskName, setNewTaskName] = useState('')

  const [newTaskPriority, setNewTaskPriority] = useState('')

  const handleItemInput = (event) => {
    setNewTaskName(event.target.value);
  }

  const handleRadioInput = (event) => {
    setNewTaskPriority(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({ taskName: newTaskName, priority: newTaskPriority})
    setTasks(copyTasks);
    setNewTaskName('');
  }

  const checkPriority = (task) => {
    if (task.priority == 'high') {
      return 'high-priority'
    } else {
      return 'low-priority'
    }
  }

  const taskNodes = tasks.map((task, index) => {
    return (
    <li key={index} className= {checkPriority(task)}>
    <span>{task.taskName}</span>
    </li>
  )
})

  return (
    <>
      <h1>My ToDo list</h1>

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>New Task</label>
        <input id='new-task' type='text' value={newTaskName} onChange={handleItemInput}/>
        <label>High</label>
        <input id='high-priority' type='radio' name='priority' value='high' onChange={handleRadioInput}/>
        <label>Low</label>
        <input id='low-priority' type='radio' name='priority' value='low' onChange={handleRadioInput}/>
        <input type='submit' value='Save and Add Task'/>
      </form>
      <ul>
        {taskNodes}
      </ul>
    </>
  );
}

export default App;

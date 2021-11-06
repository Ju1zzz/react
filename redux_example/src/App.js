import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask } from './action'

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [inputText, setInputText] = useState('')

  const del = (index) => {
     dispatch(deleteTask(index))
  }
  const add = () => {
    dispatch(addTask(inputText))
  }

  return (
    <div className="App">
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={add}>Add task</button>
      <ul>
        {tasks.map((task, index) => 
        <li key ={index}>{task.title} <button onClick={()=> del(index)}>Delete</button></li>
        )}
      </ul>
    </div>
  );
}

export default App;

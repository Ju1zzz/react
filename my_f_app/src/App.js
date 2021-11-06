import {useState} from 'react';
import Cat from './Cat';
import List from './List';
import ToDoList from './ToDoList';
import './App.css'
function App() {
  const [counter, setCounter] = useState(0);
  //setCounter(counter+1);
  return (
    <div className="App">
     {/*<h1>{counter}</h1>
     <button onClick={()=>{setCounter(state => state+1);}}>+</button>
     <button onClick={()=>{setCounter(counter-1);}}>-</button>
     <List/><Cat/>*/}
     <ToDoList/>
     
    </div>
  );
}

export default App;

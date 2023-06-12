import ToDoList from "./ToDoList"
import { useState } from "react"

export default function App() {

    const [toDo, setToDo] = useState([])
    const [newTask, setNewTask] = useState('');
    const addTask = () => {
        if(newTask) {
            setToDo([...toDo, newTask]);
            setNewTask("");
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          addTask(newTask);
        }
      };
    return (
        <div>
            <h1>Welcome to my To Do List</h1>
            <ToDoList list={toDo} />
            {toDo && toDo.length ? '' : 'No tasks...'}
            <div className="New">
                <input id="New--check" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={handleKeyDown}></input>
                <button id="New--button"
                onClick={addTask}>Add</button>
            </div>
        </div>
    )
}
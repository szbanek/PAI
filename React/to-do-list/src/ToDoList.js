import Task from "./Task"
import { useState } from "react";

export default function ToDoList(data) {
    const [checked, setChecked] = useState(true);
    const toggleCheck = () => setChecked(!checked);
    return (
        <div>
            <div className="Hide">
                <input type="checkbox" id="Hide--check" onChange={toggleCheck} value={checked}></input>
                <p id="Hide--text">hide completed</p>
            </div>
            {
                data.list.map( (taskText) => {
                    return (
                        <Task text={taskText} visibility={checked}/>
                    )
                })}
        </div>
    )
}
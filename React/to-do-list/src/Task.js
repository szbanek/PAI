import { useState } from "react";

export default function Task(data) {
    const [checked, setChecked] = useState(false);
    const styles = { textDecorationLine: checked ? "line-through" : "none" };
    const toggleCheck = () => setChecked(!checked);
    return ( data.visibility || !checked ? 
        <div className="Task">
            <input type="checkbox" id="Task--check" onChange={toggleCheck} value={checked}></input>
            <p id="Task--text" style={styles}>{data.text}</p>
        </div> : <></>
    )
}
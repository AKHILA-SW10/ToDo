import { useState } from "react";
import './TaskForm.css';

const TaskForm = (props) => {
    const [enteredTask,setEnteredTask]=useState('');
    const taskChangeHandler=(event)=>{
       setEnteredTask(event.target.value);    
    }
    const submitClickHandler=(event)=>{
        console.log("submit ..");
        props.add(enteredTask);
        props.hide();
    }
    const cancelClickHandler=(event)=>{ 
        props.hide();
    }


    return (
        <div>
            <input className="taskName" type="text" value={enteredTask} onChange={taskChangeHandler} placeholder="TaskName"></input>
            <div>
                <button className="submit-button" type="submit" onClick={submitClickHandler}>Submit</button>
                <button className="cancel-button" type="reset" onClick={cancelClickHandler}>Cancel</button>
            </div>
        </div>
    )
}
export default TaskForm;
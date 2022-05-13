import { useState } from "react";
import Card from "../UI/Card";
import './ToDoItem.css';
const ToDoItem = (props) => {
    // const [enable, setEnable]=useState(false);
    
    function clickedCompleted(event){
        props.completed(event);
        // setEnable(enable=>true);
    }
    return (
        <Card className="ToDoItem">
            <div className="ToDoItem">
                <p style={{textDecoration:!props.isCompleted?'none':'line-through'}}><li className="title">{props.title}</li></p>
                <button className="remove-button" id={props.id} onClick={props.remove}>Remove</button>
                {!props.isCompleted?<button className="completed-button" onClick={clickedCompleted} id={props.id}>Completed</button>:''}
            </div> 
         </Card>
    );
}
export default ToDoItem;
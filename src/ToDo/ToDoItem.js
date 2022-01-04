import Card from "../UI/Card";
import './ToDoItem.css';
const ToDoItem = (props) => {
    return (
        <Card className="ToDoItem">
            <div className="ToDoItem">
                <li className="title">{props.title}</li>
                <button className="remove-button" id={props.id} onClick={props.remove}>Remove</button>
            </div> 
         </Card>
    );
}
export default ToDoItem;